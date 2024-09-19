import { syncClientDownloadData } from '@/app/download/actions'
import { NextResponse } from 'next/server'

export async function GET() {
  const data = await syncClientDownloadData()
  console.log('syncClientDownloadData GET', data)

  if (data) {
    return NextResponse.json({
      success: true,
      data,
    })
  } else {
    return NextResponse.json({
      success: false,
    })
  }
}
