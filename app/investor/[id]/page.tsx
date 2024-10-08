import InvestorDetail from '@/components/investor-detail'

export default function InvestorDetailPage({ params }: { params: { id: string } }) {
  return <InvestorDetail id={params.id} />
}