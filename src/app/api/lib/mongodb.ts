import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('❌ MONGO_URI not found in environment variables.');
    throw new Error('MONGO_URI is missing');
  }

  if (mongoose.connection.readyState) {
    console.log('✅ MongoDB is already connected.');
    return;
  }

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000,
    });
    console.log('✅ MongoDB Connected...');
  } catch (err) {
    console.error('❌ Database connection error:', err);
    throw err;
  }
}
