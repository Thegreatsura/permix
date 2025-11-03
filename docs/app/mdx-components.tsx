import type { MDXComponents } from 'mdx/types'
import * as Twoslash from 'fumadocs-twoslash/ui'
import * as StepsComponents from 'fumadocs-ui/components/steps'
import * as TabsComponents from 'fumadocs-ui/components/tabs'
import defaultMdxComponents from 'fumadocs-ui/mdx'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...StepsComponents,
    ...Twoslash,
    ...components,
  }
}
