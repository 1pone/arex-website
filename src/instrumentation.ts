import {
  fetchClientDownloadData,
  setClientDownloadData,
} from '@/app/download/actions'

export async function register() {
  const data = await fetchClientDownloadData()
  setClientDownloadData(data)
}
