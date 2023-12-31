import { dirname, join } from 'path';
import { execSync } from 'child_process';
import { rimrafSync } from 'rimraf';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const protoDir = join(__dirname, '../proto');
const metaDir = join(__dirname, '../src/controllers/meta');
const protocPath = join(__dirname, '../node_modules/grpc-tools/bin/protoc');
const pluginPath = join(__dirname, '../node_modules/.bin/protoc-gen-ts_proto');

rimrafSync(`${metaDir}/*`);

const tsProtoOpt = [
	'importSuffix=.js',
	'outputServices=nice-grpc',
	'outputServices=generic-definitions,useExactTypes=false',
	'esModuleInterop=true',
];

const protoConfig = [
	`--plugin=${pluginPath}`,
	`--ts_proto_opt=${tsProtoOpt.join(',')}`,
	`--ts_proto_out=${metaDir}`,
	`--proto_path ${protoDir} ${protoDir}/*.proto`,
];

execSync(`${protocPath} ${protoConfig.join(' ')}`);
console.log(`> Proto meta created: ${metaDir}`);
