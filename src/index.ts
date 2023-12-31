import { createServer } from 'nice-grpc';
import { WhatsappDefinition } from './controllers/meta/whatsapp.js';
import { whatsappServiceImpl } from './controllers/whatsapp.js';

const server = createServer();

server.add(WhatsappDefinition, whatsappServiceImpl);

server
	.listen('0.0.0.0:50051')
	.then(() => {
		console.log('gRPC server listening on 0.0.0.0:50051');
	})
	.catch(console.error);
