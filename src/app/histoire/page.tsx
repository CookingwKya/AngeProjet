import HistoryHeroSection from '@/components/sections/HistoryHeroSection'
import StorySection from '@/components/sections/StorySection'
import ValuesSection from '@/components/sections/ValuesSection'

export const metadata = {
  title: 'Mon Histoire | Les Ateliers Culinaires d\'Ange Hong Lan',
  description: 'Découvrez l\'histoire d\'Ange Hong Lan, chef passionnée et fondatrice des Ateliers Culinaires. Un voyage entre tradition vietnamienne et innovation culinaire.',
}

export default function HistoryPage() {
  return (
    <>
      <HistoryHeroSection />
      <StorySection />
      <ValuesSection />
    </>
  )
}
