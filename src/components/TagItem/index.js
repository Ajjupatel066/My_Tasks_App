import {TagButton} from './styledComponents'

const TagItem = props => {
  const {tagDetails, activeTag, selectTag} = props

  const onClickTag = () => {
    selectTag(tagDetails.optionId)
  }

  const bgColor = activeTag ? '#f3aa4e' : 'transparent'

  return (
    <li>
      <TagButton type="button" onClick={onClickTag} color={bgColor}>
        {tagDetails.displayText}
      </TagButton>
    </li>
  )
}

export default TagItem
