# How to iframe ContractReader Into Your Site

![](https://media.cleanshot.cloud/media/10690/QxEgSkMuzOOg8SoH9YwaOFZwaWzT3O9VHfvSwB5D.jpeg?Expires=1679181707&Signature=re5rkqCl5ktULXEEH77HOjyoWs8jpbCcu9FYWa9wYczBZqqeOFV9trijBqAG4r9c3dqhyVlpfhWmriCCoMUVVLFXlKxEDrruWzzpVKwcnPiw~WCqWSRYA~Eom5WqBrQRlR5JLq~9wwUkr3MgrxsooUy7gOHYr5k3w2SD3ertsWOZ6S~5TL-R9N3I6Pm-Oax5NQ~IvoDTFq6-dzWZ0P6-ldUjjd6iVnd2D8pSPNdhtwzIw~GtmWHeOXQWH4-AFq7059i9F~u0rY8pjqs1EpJs8yWz-cHYq9V8ntJOpJa7i1CvhMKC0Z5SVgjnLP5gfnrZ6IOR6sIzvajR0RTxB3Wkbw__&Key-Pair-Id=K269JMAT9ZF4GZ)

Adding [ContractReader](https://contractreader.io) to your site couldn't be easier. Just set it in an `iframe` with a `width` and `height` and you're good to go!

## Example

See [`example.jsx`](https://github.com/ContractReader-io/how-to-integrate/blob/main/example.jsx) for an example of an `iframe` that displays after a `button` is clicked.

## URL Scheme

The URL scheme looks like this: `https://contractreader.io/contract/:network/:contract_address`

Supported networks are `mainnet`, `goerli`, and `sepolia`.

Example URLs include:

* [`https://www.contractreader.io/contract/mainnet/0x30535831e3244dc15153ce173c2803af4ee7e374`](https://www.contractreader.io/contract/mainnet/0x30535831e3244dc15153ce173c2803af4ee7e374)
* [`https://www.contractreader.io/contract/goerli/0xc82548d515f3DF5059D3D3F12fa46E063dB99362`](https://www.contractreader.io/contract/goerli/0xc82548d515f3DF5059D3D3F12fa46E063dB99362)

## Support

Please create an Issue if you have questions
