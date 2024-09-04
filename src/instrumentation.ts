import {
  fetchClientDownloadData,
  setClientDownloadData,
} from '@/app/download/actions'

export async function register() {
  const data = await fetchClientDownloadData()
  data && setClientDownloadData(data)
}
