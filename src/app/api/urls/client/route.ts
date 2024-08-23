import { fetchClientDownloadData } from '@/app/download/actions'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await fetchClientDownloadData()
    if (data)
      return NextResponse.json({
        success: true,
      })
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: JSON.stringify(e),
    })
  }
}
