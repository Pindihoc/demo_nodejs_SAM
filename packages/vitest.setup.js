import {expect} from "vitest";
import {allCustomMatcherWithAliases} from "aws-sdk-client-mock-vitest";

expect.extend(allCustomMatcherWithAliases);

const ENV = {DEV: "dev", PROD: "prod"};
const REGION = {US_E_1: "us-east-1", US_E_2: "us-east-2", US_W_1: "us-west-1", US_W_2: "us-west-2"};

process.env.ENVIRONMENT = ENV.DEV;
process.env.AWS_REGION = REGION.US_W_2;

const {ENVIRONMENT, AWS_REGION} = process.env;
if (!Object.values(ENV).includes(ENVIRONMENT)) throw new Error("Invalid Environment");
if (!Object.values(REGION).includes(AWS_REGION)) throw new Error("Invalid AWS Region");
