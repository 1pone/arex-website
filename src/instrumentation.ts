import {
  fetchClientDownloadData,
  setClientDownloadData,
} from '@/app/download/actions'

export async function register() {
  const data = await fetchClientDownloadData()
  console.log('fetchClientDownloadData', data)
  data && setClientDownloadData(data)
}
