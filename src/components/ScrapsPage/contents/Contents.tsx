import { utcToJst } from '../../../libs/date'

import { Tag } from './Tag'
import { ContentBody } from './Content'
import { CustomLink } from './CustomLink'

import { ScrapsType } from '../../../types/microCMS/Common'

export const Contents = ({ scraps }: { scraps: ScrapsType }) => {
  return (
    <div className="mt-[64px]">
      {scraps.map(({ id, title, tags, updatedAt, body, links }) => {
        const date = utcToJst({ date: updatedAt })

        return (
          <div
            className="mt-[52px]"
            key={id}
          >
            <div className="text-[32px]">{title}</div>
            <div>{date}</div>
            {tags &&
              tags.map(({ id, title, description }) => {
                return (
                  <Tag
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                  />
                )
              })}
            <details className="mt-[8px] text-[18px]">
              <summary>詳細を開く</summary>
              <div className="mt-[16px]">
                {body.map(({ content, fieldId }, index) => {
                  return (
                    <ContentBody
                      key={index}
                      fieldId={fieldId}
                      content={content}
                    />
                  )
                })}
              </div>
              {links &&
                links.map(({ url }, index) => {
                  return (
                    <CustomLink
                      key={index}
                      url={url}
                    />
                  )
                })}
            </details>
          </div>
        )
      })}
    </div>
  )
}