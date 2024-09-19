import { NextResponse } from 'next/server'
import { getClientDownloadData } from '@/app/download/actions'

export async function GET() {
  const resource = await getClientDownloadData()
  console.log('getClientDownloadData GET', resource)

  if (resource) {
    return NextResponse.json({
      success: true,
      data: resource,
    })
  } else {
    return NextResponse.json({
      success: false,
    })
  }
}
