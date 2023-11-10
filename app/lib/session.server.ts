import {  scryptAsync } from '@noble/hashes/scrypt';
import { z } from "zod";
import { bytesToHex as toHex, randomBytes } from '@noble/hashes/utils';
import { timingSafeEqual } from 'crypto';

export const signupSchema = z.object({
    name: z.string().min(1).max(8).trim(),
    email: z.string().email().trim(),
    password: z.string().min(5).max(12).trim()
});

async function Hash(password: Uint8Array | string) {
    const salt = toHex(randomBytes(16));
    const scr3 = toHex(await scryptAsync(password, salt, {
        N: 2 ** 16,
        r: 8,
        p: 1,
        dkLen: 32,
        maxmem: 2 ** 32 + 128 * 8 * 1, // N * r * p * 128 + (128*r*p)
    }));
    const hashed = `${salt}:${scr3}`;
    
    return hashed;
}

async function Verify(password: string, verify: string) {
    const [salt, key] = verify.split(':');
    const hashedBuffer = await scryptAsync(password, salt, {
        N: 2 ** 16,
        r: 8,
        p: 1,
        dkLen: 32,
        maxmem: 2 ** 32 + 128 * 8 * 1, // N * r * p * 128 + (128*r*p)
    });
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    if (match) {
        console.log(match)
        return true;
    } else {
        console.log(match)
        return false;
    }
    
}

export { Hash, Verify };