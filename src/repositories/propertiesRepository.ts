import { db } from '../../firebase';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc
} from 'firebase/firestore';

export interface Property {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  tenantId: string;
}

const collectionName = 'properties';

export async function getAllProperties(): Promise<Property[]> {
  const snapshot = await getDocs(collection(db, collectionName));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Property));
}

export async function getPropertiesByTenant(tenantId: string): Promise<Property[]> {
  const q = query(
    collection(db, collectionName),
    where('tenantId', '==', tenantId)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Property));
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const ref = doc(db, collectionName, id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() } as Property;
}
