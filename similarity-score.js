import tf from '@tensorflow/tfjs-node';
import use from '@tensorflow-models/universal-sentence-encoder';

// Load the Universal Sentence Encoder model
async function loadUSEModel() {
  const model = await use.load();
  return model;
}

// Calculate semantic similarity between two sentences using Universal Sentence Encoder
async function calculateSimilarity(model, sentenceA, sentenceB) {
  const embeddings = await model.embed([sentenceA, sentenceB]);
	const embeddingsData = await embeddings.array();
  const similarity = tf.losses.cosineDistance(embeddingsData[0], embeddingsData[1]).arraySync();
  return 1 - similarity; // Convert cosine distance to similarity
}

export default async function similarityScore(sentenceA,sentenceB) {
  const model = await loadUSEModel();
  const similarity = await calculateSimilarity(model, sentenceA, sentenceB);

  return similarity;
}
