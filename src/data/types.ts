export interface Product {
  id: string
  name: string
  slug: string
  price: number
  currency: string
  shortDescription: string
  longDescription: string
  images: string[]
  tags: string[]
  genderTag: 'men' | 'women' | 'unisex'
  featured: boolean
}
