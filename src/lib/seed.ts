import { collection, addDoc, getDocs, writeBatch, doc } from 'firebase/firestore';
import { db } from './firebase';
import { SERVICES_DATA } from '../../constants';

export const seedInitialData = async () => {
  const servicesSnapshot = await getDocs(collection(db, 'services'));
  
  if (servicesSnapshot.empty) {
    console.log('Seeding initial services...');
    const batch = writeBatch(db);
    
    for (const service of SERVICES_DATA) {
      const newDocRef = doc(collection(db, 'services'));
      // Firestore uses doc id, and we standardize on imageUrl
      const { id, ...data } = service;
      batch.set(newDocRef, { 
        ...data, 
        category: 'General',
        imageUrl: service.imageUrl || service.image || ''
      });
    }
    
    await batch.commit();

    // Seed a sample client profile for testing
    const clientEmail = 'client@example.com';
    const clientUid = 'SAMPLE_CLIENT_UID'; // This won't match real auth, but we create the doc
    // In reality, the admin would create this doc when registering a client
    
    const userRef = doc(db, 'users', 'client_test_id'); // We'd actually need the real UID
    // But for the sake of the blueprint and testing, let's just seed a generic one 
    // or better, instruct the user.
    
    console.log('Seeding complete!');
    return true;
  } else {
    console.log('Services collection already has data. Skipping seed.');
    return false;
  }
};
