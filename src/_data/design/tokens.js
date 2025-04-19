import colors from "../../design-tokens/colors.json" with { type: "json" };
import fonts from "../../design-tokens/fonts.json" with { type: "json" };
import spacing from "../../design-tokens/spacing.json" with { type: "json" };
import textLeading from "../../design-tokens/text-leading.json" with { type: "json" };
import textSizes from "../../design-tokens/text-sizes.json" with { type: "json" };
import textWeights from "../../design-tokens/text-weights.json" with { type: "json" };

export default () => {
	return {
		colors: colors.items,
		textSizes: textSizes.items,
		textLeading: textLeading.items,
		textWeights: textWeights.items,
		spacing: spacing.items,
		fonts: fonts.items,
	};
};
