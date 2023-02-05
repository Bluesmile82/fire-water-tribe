import '#/styles/globals.css';
import NotionService from '../services/notion';

const renderFacebookSVG = () => (
  <svg viewBox="0 0 36 36" fill="url(#jsc_s_2)" height="40" width="40">
    <defs>
      <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2">
        <stop offset="0%" stopColor="#0062E0"></stop>
        <stop offset="100%" stopColor="#19AFFF"></stop>
      </linearGradient>
    </defs>
    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
    <path
      fill="white"
      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
    ></path>
  </svg>
);

const renderInstagramSVG = () => (
  <svg
    className="h-10 w-10"
    xmlns="http://www.w3.org/2000/svg"
    width="102"
    height="102"
    viewBox="0 0 102 102"
  >
    <defs>
      <radialGradient
        id="a"
        cx="6.601"
        cy="99.766"
        r="129.502"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".09" stopColor="#fa8f21" />
        <stop offset=".78" stopColor="#d82d7e" />
      </radialGradient>
      <radialGradient
        id="b"
        cx="70.652"
        cy="96.49"
        r="113.963"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".64" stopColor="#8c3aaa" stopOpacity="0" />
        <stop offset="1" stopColor="#8c3aaa" />
      </radialGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      data-name="Path 16"
    />
    <path
      fill="url(#b)"
      d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
      data-name="Path 17"
    />
    <path
      fill="#fff"
      d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
      data-name="Path 18"
      transform="translate(-422.637 -426.196)"
    />
  </svg>
);

async function getData() {
  const notionService = new NotionService();
  return await notionService.getInfo();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  const concerts = data?.map((d) => {
    return Object.entries(d).reduce((acc, [key, value]) => {
      const valueText = value.rich_text?.[0]?.plain_text;
      if (valueText) {
        acc[key] = valueText;
      }
      return acc;
    }, {});
  });

  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="flex h-screen items-center justify-center overflow-y-scroll bg-gray-1100 bg-[url('/grid.svg')]">
        <div>
          <h1 className="text-6xl font-medium text-gray-300">
            Fire Water Tribe
          </h1>
          <p className="ml-1 mb-6">
            A soul, blues, funk music band from Madrid
          </p>
          <div className="ml-1 mb-6">
            Próximos conciertos
            <ul>
              {concerts &&
                concerts.map(
                  (concert) =>
                    concert.name && (
                      <li key={concert.name} className="text-sm text-white">
                        {concert.date} -{concert.time} -{concert.name} - Precio:{' '}
                        {concert.price} -{' '}
                        <a
                          className="text-blue-500 underline"
                          target="_blank"
                          rel="noreferrer"
                          href={concert.direction}
                        >
                          Dirección
                        </a>
                      </li>
                    ),
                )}
            </ul>
          </div>

          <div className="flex">
            <a
              href="https://www.facebook.com/FireWaterTribe"
              title="Facebook link"
            >
              {renderFacebookSVG()}
            </a>
            <a
              className="ml-2"
              href="https://www.instagram.com/firewatertribe"
              title="Instagram link"
            >
              {renderInstagramSVG()}
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
