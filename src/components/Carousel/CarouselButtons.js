import { useState, useEffect, useCallback } from 'react'

const useCarouseButtons = (emblaApi) => {
  const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true)
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true)

  const onPreviousButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi) => {
    setPreviousButtonDisabled(!emblaApi.canScrollPrev())
    setNextButtonDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    previousButtonDisabled,
    nextButtonDisabled,
    onPreviousButtonClick,
    onNextButtonClick
  }
}

function CarouselNextButton(props) {
  const { children, ...restProps } = props

  return (
    <button type="button" className="embla__button embla__button--next" {...restProps}>
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </button>
  )
}

function CarouselPreviousButton(props) {
  const { children, ...restProps } = props

  return (
    <button type="button" className="embla__button embla__button--next" {...restProps}>
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
  )
}

export { useCarouseButtons, CarouselPreviousButton, CarouselNextButton }