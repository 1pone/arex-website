export type PageProps<T = {}> = {
  params: {
    [key: string]: string | undefined
  }
  searchParams: {
    [key: string]: string | undefined
  }
} & T
