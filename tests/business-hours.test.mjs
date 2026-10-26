import test from 'node:test';
import assert from 'node:assert/strict';
import {getBusinessAvailability} from '../app/business-hours.mjs';
const cases=[
 ['before Monday opening','2026-10-26T00:59:00Z',false,'08:59'],
 ['Monday opening','2026-10-26T01:00:00Z',true,'09:00'],
 ['just before closing','2026-10-26T08:59:00Z',true,'16:59'],
 ['at closing','2026-10-26T09:00:00Z',false,'17:00'],
 ['Friday daytime','2026-10-30T03:00:00Z',true,'11:00'],
 ['Saturday daytime','2026-10-31T03:00:00Z',false,'11:00'],
 ['Sunday daytime','2026-11-01T03:00:00Z',false,'11:00'],
 ['UTC Friday but China Saturday','2026-10-30T16:30:00Z',false,'00:30'],
];
for(const [name,input,available,chinaTime] of cases)test(name,()=>assert.deepEqual(getBusinessAvailability(new Date(input)),{available,chinaTime}));
