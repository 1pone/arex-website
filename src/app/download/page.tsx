import Image from 'next/image'
import arexLogo from '@/images/logos/logo.png'
import { Text, TextLink } from '@/components/text'
import { DownloadButton } from './components/DownloadButton'
import { getClientDownloadData } from '@/app/download/actions'

export default async function Download() {
  const clientDownloadData = await getClientDownloadData()

  return (
    <div className="flex flex-col justify-around px-8 py-4 sm:flex-row">
      <div className="mb-4 flex sm:block">
        <Image
          src={arexLogo}
          alt="arex-logo"
          width={128}
          height={128}
          className="drop-shadow-xl"
        />
        <div className="p-4">
          <Text>Version: {clientDownloadData?.tag_name}</Text>
          <Text>
            Release date:{' '}
            {new Date(clientDownloadData?.published_at).toLocaleDateString()}{' '}
          </Text>
          <TextLink href={clientDownloadData?.html_url || '#'} target="_blank">
            Release notes ➚
          </TextLink>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="my-4 text-2xl font-medium">Download AREX Client</div>
        <div className="flex flex-1 flex-col justify-center">
          <DownloadButton assets={clientDownloadData.assets} />
          <TextLink
            href="https://github.com/arextest/releases/releases"
            target="_blank"
            className="ml-auto"
          >
            History versions
          </TextLink>
        </div>
      </div>
    </div>
  )
}
