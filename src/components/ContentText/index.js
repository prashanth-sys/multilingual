import './index.css'

const ContentText = props => {
  const {languageDetails} = props
  const {imageUrl, imageAltText} = languageDetails
  return (
    <>
      <li>
        <img src={imageUrl} alt={imageAltText} />
      </li>
    </>
  )
}

export default ContentText
