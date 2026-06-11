import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC = 'C:/Users/madhu/Downloads/stores'
const OUT = join(__dirname, '..', 'public', 'stores')

// source file -> output slug
const MAP = [
  ['crochika.com_.png', 'crochika'],
  ['konpkay.com_.png', 'konpkay'],
  ['mfsstore.in_.png', 'mfsstore'],
  ['ubersam14store.com_.png', 'ubersam14store'],
]

await mkdir(OUT, { recursive: true })

for (const [file, slug] of MAP) {
  const input = join(SRC, file)
  const output = join(OUT, `${slug}.webp`)
  const meta = await sharp(input).metadata()
  const info = await sharp(input)
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(output)
  console.log(
    `${slug.padEnd(16)} ${meta.width}x${meta.height} -> ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`
  )
}
