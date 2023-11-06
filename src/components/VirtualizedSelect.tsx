import {
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  HtmlHTMLAttributes,
  memo,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import { VariableSizeList, ListChildComponentProps } from 'react-window'

import TextInput from '~/components/inputs/TextInput'
import { ThemeType } from '~/theme'
import { Option } from '~/types/shared'

import Autocomplete, {
  autocompleteClasses,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  AutocompleteRenderOptionState,
  AutocompleteValue,
} from '@mui/material/Autocomplete'
import Popper from '@mui/material/Popper'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const LISTBOX_PADDING = 8

interface Props<
  TOption extends Option,
  TMultiple extends boolean = false,
  TDisableClearable extends boolean = false,
  TFreeSolo extends boolean = false,
> extends Omit<
    AutocompleteProps<TOption, TMultiple, TDisableClearable, TFreeSolo>,
    'options' | 'renderInput' | 'onChange'
  > {
  options: TOption[]
  onChange?: (value: AutocompleteValue<TOption, TMultiple, TDisableClearable, TFreeSolo>) => void
}

type RenderData = {
  props: HTMLAttributes<HTMLLIElement>
  option: Option
  index: number
}[][]

const VirtualizedSelect = forwardRef(
  <
    TOption extends Option,
    TMultiple extends boolean = false,
    TDisableClearable extends boolean = false,
    TFreeSolo extends boolean = false,
  >(
    {
      options,
      onChange,
      id,
      ...restProps
    }: Props<TOption, TMultiple, TDisableClearable, TFreeSolo>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const renderInput = (params: AutocompleteRenderInputParams) => (
      <TextInput {...params} size="small" label="Countries" />
    )

    const renderOption = (
      props: HTMLAttributes<HTMLLIElement>,
      option: TOption,
      state: AutocompleteRenderOptionState
    ) => [{ props, option, index: state.index }] as ReactNode

    return (
      <Autocomplete
        ref={ref}
        id={id || `virtualize${options.length}`}
        disableListWrap
        PopperComponent={StyledPopper}
        ListboxComponent={ListboxComponent}
        options={options}
        renderInput={renderInput}
        renderOption={renderOption}
        onChange={(_, value) => {
          onChange?.(value)
        }}
        {...restProps}
      />
    )
  }
)

const renderRow = ({ data, index, style }: ListChildComponentProps<RenderData>) => {
  const optionData = data[index]
  const {
    props,
    option: { label, value },
  } = optionData[0]
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  }

  return (
    <Typography component="li" {...props} key={value} noWrap style={inlineStyle}>
      {label}
    </Typography>
  )
}

const ListboxComponent = memo(
  forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLElement>>(({ children, ...other }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const OuterElement = forwardRef((props, _) => <div ref={ref} {...props} {...other} />)
    const gridRef = useRef<VariableSizeList>(null)
    const itemData = children as RenderData
    const itemCount = itemData.length
    const smUp = useMediaQuery((theme: ThemeType) => theme.breakpoints.up('sm'), {
      noSsr: true,
    })
    const itemSize = smUp ? 36 : 48

    const getHeight = () => Math.min(itemCount, 8) * itemSize

    useEffect(() => {
      if (gridRef.current != null) {
        gridRef.current.resetAfterIndex(0, true)
      }
    }, [itemCount])

    return (
      <VariableSizeList
        itemData={itemData}
        height={getHeight() + 2 * LISTBOX_PADDING}
        width="100%"
        ref={gridRef}
        outerElementType={OuterElement}
        innerElementType="ul"
        itemSize={() => itemSize}
        overscanCount={5}
        itemCount={itemCount}
      >
        {renderRow}
      </VariableSizeList>
    )
  })
)

const StyledPopper = styled(Popper)({
  [`& .${autocompleteClasses.listbox}`]: {
    boxSizing: 'border-box',
    '& ul': {
      padding: 0,
      margin: 0,
    },
  },
})

export default VirtualizedSelect
