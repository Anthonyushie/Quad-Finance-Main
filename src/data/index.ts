

type perksProps = {
  image: string
  name: string,
  description: string
}[]

export const perks: perksProps = [
	{
		image: "/transaction.svg",
		name: "Cross-Border Transactions",
		description:
			"Quad Finance enables secure and efficient cross-border payments, making international money transfers fast and easy.",
	},
	{
		image: "/ussd.svg",
		name: "USSD Accessibility",
		description:
			"Access Quad Finance services from any mobile phone, even without the internet, ensuring financial inclusion for everyone.",
	},

	{
		image: "/device.svg",
		name: "Cross-Platform Integration",
		description:
			"Enjoy a seamless and synchronized experience across all your devices with Quad Finance, whether using USSD, web, or mobile apps.",
	},
];