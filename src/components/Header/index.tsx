import {
  Layout,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useCacheShareValue from "../../hooks/useCacheShareValue";
import { useColorStyle } from "../../hooks/useStyle";
import { useTheme } from "../../redux/theme";
import {
  aic,
  center,
  f1,
  fdr,
  fontSize,
  fw,
  jcSb,
  layout,
  margin,
  padding,
  solidShadow,
  squareLayout,
} from "../../styles/normal";
import { IHeader } from "../../types/components/Header";
import { ReText, ReView } from "../../utils/reanimated";
import Button from "../Button";

export default function Header({
  paddingFromStatusbar = false,
  title,
  subtitle,
  leftIcon,
  rightIcons,
}: IHeader) {
  let { top } = useSafeAreaInsets();
  let {
    colors: { bg, text, gray },
  } = useTheme();
  let iconSize = 36;
  let row = [fdr, aic];
  let bgC = useCacheShareValue(bg);
  let textC = useCacheShareValue(text);
  let bgColors = useColorStyle(bgC);
  let grayC = useCacheShareValue(gray);
  let textColors = useColorStyle(textC);
  let grayColors = useColorStyle(grayC);
  let iconsStyle = [layout(4 * iconSize, iconSize), row];
  return (
    <ReView
      {...{
        style: [
          padding("t", paddingFromStatusbar ? top : 0),
          padding("nt", 10),
          row,
          jcSb,
          bgColors.backgroundColor,
          fw,
          solidShadow(text, 0, 3),
        ],
        layout: Layout,
      }}
    >
      <ReView {...{ style: [row, f1], layout: Layout }}>
        {leftIcon && (
          <ReView
            {...{
              style: [squareLayout(iconSize), center, margin("e", 10)],
              entering: SlideInLeft,
              exiting: SlideOutLeft,
              layout: Layout,
            }}
          >
            <Button {...leftIcon} />
          </ReView>
        )}
        <ReView {...{ style: [f1], layout: Layout }}>
          <ReText
            {...{
              style: [fontSize(22.5), textColors.color],
              numberOfLines: 1,
              layout: Layout,
            }}
          >
            {title}
          </ReText>
          {subtitle && (
            <ReText
              {...{
                style: [fontSize(18), grayColors.color],
                numberOfLines: 2,
                layout: Layout,
              }}
            >
              {subtitle}
            </ReText>
          )}
        </ReView>
      </ReView>
      <ReView
        {...{
          style: [iconsStyle, jcSb],
          entering: SlideInRight,
          exiting: SlideOutRight,
          layout: Layout,
        }}
      >
        {rightIcons && (
          <>
            {rightIcons.map((btn, key) => (
              <Button {...{ key, ...btn }} />
            ))}
          </>
        )}
      </ReView>
    </ReView>
  );
}
