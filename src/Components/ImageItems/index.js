import './index.css'

const ImageItems = props => {
  const {imageDetails, winOrLose} = props

  const onClickThumbnailImage = () => {
    winOrLose(imageDetails.id)
  }
  return (
    <div className="image-card-container">
      <button
        className="button-image"
        type="button"
        onClick={onClickThumbnailImage}
      >
        <img
          className="thumbnail-image"
          src={imageDetails.thumbnailUrl}
          alt="thumbnail"
        />
      </button>
    </div>
  )
}

export default ImageItems
