import { createServer } from 'nice-grpc';
import { WhatsappDefinition } from './controllers/meta/whatsapp.js';
import { getWhatsappController } from './controllers/whatsapp.js';
import { WhatsWebJsLoader } from './third-parties/whats-web-js/loader.js';

const server = createServer();
const client = await new WhatsWebJsLoader().loadClient();

server.add(WhatsappDefinition, getWhatsappController(client));

server
	.listen('0.0.0.0:50051')
	.then(() => {
		console.log('gRPC server listening on 0.0.0.0:50051');
	})
	.catch(console.error);
