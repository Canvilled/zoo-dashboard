import AnimalDashboard from '@/components/AnimalDashboard';
import { getQueryClient } from '@/lib/get-query-client'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { animalOptions } from '@/queries/animals';

export const dynamic = 'force-dynamic'

export default async function Home() {
  const queryClient = getQueryClient()
  
  // Prefetch the animals data on the server
  void queryClient.prefetchQuery(animalOptions)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnimalDashboard />
    </HydrationBoundary>
  )
}
