import Link from 'next/link'
import { InferGetStaticPropsType, NextPage } from 'next'

import { getAllContentPaths, getContentBySlug } from '../src/libs/getContentsFromMdx'

import tags from '../fetchData/snippets/tags.json'

const SnippetsIndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ allContents }) => {
  return (
    <>
      <div>
        <div>タグ一覧</div>
        {tags.map((tag) => {
          return (
            <ul key={tag.slug}>
              <a href={`/snippets?tags=${tag.slug}`}>
                <span>{tag.name}</span>
              </a>
            </ul>
          )
        })}
      </div>
      <div className="mt-[48px]">
        {allContents.map(({ slug, title, tags, date }) => {
          return (
            <div
              key={slug}
              className="mb-[16px]"
            >
              <Link
                href={slug}
                passHref
              >
                <a className="text-[#1ED3C6]">{title}</a>
              </Link>
              <div>{tags}</div>
              <div>{date}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const slugs = await getAllContentPaths({ target: 'snippets' })
  const allContents = slugs.map((slug) => getContentBySlug(slug, ['title', 'tags', 'date', 'slug']))

  return {
    props: {
      allContents,
    },
  }
}

export default SnippetsIndexPage
