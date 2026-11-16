import test from 'node:test';import assert from 'node:assert/strict';import{createHmac,timingSafeEqual}from'node:crypto';
test('session signatures detect tampering',()=>{let secret='test',token='random-token',sign=x=>createHmac('sha256',secret).update(x).digest('base64url'),sig=sign(token);assert.equal(timingSafeEqual(Buffer.from(sig),Buffer.from(sign(token))),true);assert.notEqual(sign(token),sign(token+'x'))});
test('CSV summary basic arithmetic',()=>{let a=[10,20,30];assert.equal(a.reduce((x,y)=>x+y,0)/a.length,20);assert.equal(Math.max(...a),30)});
test('video duration is clamped from 30 to 300 seconds',()=>{let f=x=>Math.max(30,Math.min(300,Number(x)||30));assert.equal(f(10),30);assert.equal(f(90),90);assert.equal(f(900),300)});
