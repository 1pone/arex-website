import { NextResponse } from 'next/server'
import {
  fetchClientDownloadData,
  setClientDownloadData,
} from '@/app/download/actions'

export async function GET() {
  const data = await fetchClientDownloadData()
  if (data) {
    await setClientDownloadData(data)
    return NextResponse.json({
      success: true,
    })
  } else {
    return NextResponse.json({
      success: false,
    })
  }
}
