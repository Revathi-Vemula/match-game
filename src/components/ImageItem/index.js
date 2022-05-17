import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickCheckThumbnail} = props
  const {thumbnailUrl} = imageDetails

  const isCorrectThumbnail = () => {
    onClickCheckThumbnail(thumbnailUrl)
  }

  return (
    <li>
      <button className="btn-image" type="button" onClick={isCorrectThumbnail}>
        <img src={thumbnailUrl} className="img-thumbnail" alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
