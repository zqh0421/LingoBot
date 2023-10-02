// Import the framework and instantiate it
import Fastify from 'fastify';
// import HttpsProxyAgent from 'https-proxy-agent'
// Import the functions you need from the SDKs you need
import admin, { ServiceAccount } from 'firebase-admin';
import dotenv from 'dotenv';
import cors from '@fastify/cors';
// import { createProxyMiddleware } from 'http-proxy-middleware';
// import httpProxy from '@fastify/http-proxy';
// import { getAnalytics } from "firebase/analytics";
// import { Firestore } from '@google-cloud/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.LINGO_BUDDY_FIREBASE_API_KEY,
//   authDomain: process.env.LINGO_BUDDY_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.LINGO_BUDDY_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.LINGO_BUDDY_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.LINGO_BUDDY_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.LINGO_BUDDY_FIREBASE_APP_ID,
//   measurementId: process.env.LINGO_BUDDY_FIREBASE_MEASUREMENT_ID
// };

dotenv.config();

const serviceAccount: ServiceAccount = process.env.LINGO_BUDDY_FIREBASE_SERVICE_ACCOUNT 
? JSON.parse(process.env.LINGO_BUDDY_FIREBASE_SERVICE_ACCOUNT) 
: null;

// const agent = new HttpsProxyAgent(process.env.LINGO_BUDDY_FIREBASE_HTTP_PROXY)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // httpAgent: agent
});
// const analytics = getAnalytics(app);
const db = admin.firestore()

const fastify = Fastify({ logger: true })

// Register the plugin
fastify.register(cors, {
  // put your options here
  origin: true,
  credentials: true,
});

fastify.addHook('preHandler', (request, reply, done) => {
  const origin = request.headers.origin;
  if (origin) {
    reply.header('Access-Control-Allow-Origin', origin);
  }
  done();
});


// Declare a route
fastify.get('/', function handler (request, reply) {
  reply.send({ 'hello': 'world'})
})

fastify.get('/test/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  const docRef = db.collection('test').doc(id);
  const doc = await docRef.get();
  console.log(doc.exists)
  if (!doc.exists) {
    reply.status(404).send({ error: 'Document not found' });
  } else {
    reply.send(doc.data());
  }
})

// Start the Fastify server
const start = async () => {
  try {
    await fastify.listen({ port: 3128 });
    const address = fastify.server.address();
    if (typeof address === 'string' || address === null) {
      fastify.log.info(`server is listening on ${address}`);
    } else {
      fastify.log.info(`server is listening on ${address.port}`);
    }
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();