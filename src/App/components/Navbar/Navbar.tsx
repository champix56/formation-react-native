import React, {ReactElement} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import HomePage from '../../page/HomePage/HomePage';
import Profile from '../../page/Profile/Profile';
import Settings from '../../page/Settings/Settings';
import NavbarItem from '../NavbarItem/NavbarItem';

import {styles} from './Navbar.style';

interface NavbarProps {
  goTo: Function;
  page: ReactElement;
  name: string;
}

const Navbar: React.FC<NavbarProps> = props => {
  return (
    <View data-testID="Navbar" style={styles.Navbar}>
      <NavbarItem
        text="Home"
        icon={iconHome}
        selected={props.name === 'home' ? true : false}
        action={() => {
          props.goTo(<HomePage />, 'home');
        }}
      />
      <NavbarItem
        text="Profile"
        icon={iconProfil}
        selected={props.name === 'profile' ? true : false}
        action={() => {
          props.goTo(<Profile />, 'profile');
        }}
      />
      <NavbarItem
        text="Settings"
        icon={iconSettings}
        selected={props.name === 'settings' ? true : false}
        action={() => {
          props.goTo(<Settings />, 'settings');
        }}
      />
    </View>
  );
};
function mstp(state: any, own: any) {
  return {
    ...own,
    ...state.navigation,
  };
}
function mdtp(dispatch: Function) {
  return {
    goTo: (cmp: React.ReactElement, name: string) =>
      dispatch({type: 'GO_TO', value: cmp, name: name}),
  };
}
export default connect(mstp, mdtp)(Navbar);
const iconProfil =
  'data:image/png;base64,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';
const iconHome =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADyRJREFUeF7tXXtwlNUVP+fuZhOCpPJQQWrFjuhU8TVjfVRtpWinyojK7qLVamnVjDx2QwrGZIO6FjYEpEI2ERV1WsfW126oitV2FHW0VEWnD5RWB1tBBwNVoIpANtn9TucuWQqY77v32/t9+0hu/svsueee+zu/e+757hOhQH/Xhu6o6Yb0ZEL6vofgNANhHAAcDgRpRNiOBF2E8AYirq2qSD37yNKlu500bUpDw7DKlGciAUyCDJ4NjEYDwBF9dXyKQF2EuI4M9mLvkN5XnlmyZJeT9ZeqLnTbsKtmNZ2Q8dCtAHg1AFbL1EdAXxDiY5DGRavuiW2WKWMmM3VW87HMa8whghsR8DApXQS7gNFDRpotV61fqr4iCrlGgGB9/RBKD1kAQHWA6M2njUSwFxDu3kO7Fjzf3p6yo6O2trZiR9Wo24CoKe/6AXoBcdH24RULXolG03bqLxdZVwjgD88fz8hYRQgTnAACCd4CzAQS8cUfyegL1jceD2n2KCF8W0ZeJJOt32tck1jW+oFIttx+d5wA/lDjGYDsj/j/8dUZTAi2IWPfS7QtfN9KYSAcmURETyLiCGcq3qeFiHYg4rRkvGWNk3qLrctRAvCeD2Csddz5fSiRQVsqvHT+48tbN/UHXDDUNIMA4vmGfKEziNIIEE60L7pXKFsmAo4RYPr0aNXumt43COg0V9uO9DYOrzwvEY325OoJBoMeOnp8DAhudbXuHBEBVo7s/mz2ypUrewtRn5t1OEaAQCiyFBDmumnsAboXJOMtt/P/r5nROLyngj0BABcXqO5cNS/4eo2rHr23dWeB63W0OkcIkP3UY7BBJvQiwbuA8KDh8bxY7dm7qTuTMRgNHWcQTTLAqEXCU0Qt5F8HzIvjjQxWA6VXI7ITRWVyv2frZ3g/Q1yzZ483+4lZXZ0+ltdPhnEzIJ4sq4vIeB/Qe1lnfOFG2TKlJucIAQLhxocA2M+sGkdEPchY/YThFfdFo1GjP9loNMo27OydSURLAaDSEiyCNQR0hmyyx0mDDOcl22J8/CYT3egPR2YCwV2IMETGWeWeHCoTgM/wpbCny2qShzufkeeSRMfCl2RA9YfmXwSYWY2AVTLyEjKfGGhcsaqt9S0JWfDPbj4TGT0NAEfLyEMZJ4fKBPCHmn+ESI9aAoU4K9kWWyEFZp9QsK55NhG12ynTryxPGhm7IrEstsWOrmB981gyjKeA8Ewb5e75bIRvTjlNGikTYGo48gADuNEMpOyYu3Xj6YlEImMDSODDwbvbU+vtjMn96H8y1e376eqV0T126s7JXlYbra6s6vkVAEyzUb6skkNlAgRDkXVWM25EWNfZHovbAHC/aDAUmU4I3AF2/wgQlkwY7ouY5Rs2FGIgFGkgoBZEZDLliOADILqss2PRezLyxZRRJsDUUORThjDKPALQyYn2Rf/Ip5GXhEKVQ2HYZkA4SrZ83/rB9M54y5OyZWTk/OHINCD49UBLDpUJ4A81pRDRZwZiT1W6RmVpNRCORAHgDhknAcAnZODlnR2xtyXlbYkNxORQmQCBcMTskyoLbjLeolTHlTdHj2S+1GbRFwEZ9DfGjMtlF4xsef4A4atnNxydQe9TdhaaqIRnDpWcw3FxmwC8jqmhxocZsustnJZMdft+km+yZ5cMfNr7y5qeBwDgxzbKlmRyWBYE4CuMiOwv/YDtZLJnw5dZ0QGRHJYFAfoizasAcEHOSwTUDYg3dba1/Mau55yUD4aaAoTwsOxuJwNgJwMIlsqyctkQwF/X7EeiZJ/zbM3sOenw/nQF50RONzLwNCJ8Q6ouojQBm5vv57FUHZJCZUMAvuRrjDl+IxjweSGSPUn89ouVa3JYNgTIDgNz5l+IuPvNxLJle+06qBDy5ThzWFYEKIQTHaijrJJDTQAHPN5vXlAmyaEmgEsE4GrLITnUBHCRAFx1qSeHmgAuE4CrL+WZQ02AAhCgr4qSTA41AQpHgGxNpTZzqAlQYAKUWnKoCVAEApRScqgJUCQClEpyqAlQRAKUQnKoCVB8AhQ1OVQiQPY0LqLlfn/VLWEl4p+CmFGMPYd5EcDOaVxNAHvcKfTMoW0C8MuWfCn2GBCbLNM0TQAZlA6WKeTMoS0CZC+AsHcal5LxFqnDFPZhGvAlMBCO8O3w/Bi8lJ/yOa0spZhDHQg1XUCInbK3f5TKnr1yp4nbM4dSBAiGm2sNoA4EqJAClKjLYHS57GlcKZ2DWMjNZWVLAlwYjXpH7ehZDgCzpPHP8zSutP5BKujWaWVTAthN9vr8UtADGoONC24kh/0SgN+zZ6ThWRtXr/DjYb9IxlvutLh9Y7D5y6325pUcesE7+Yn2hf861KivECBYN/9EI5NZgwzHyrRAJ3syKDkvYzc5BIJt5PVM6ly2YMOB1hxEAH994zfRwNeB8EhJk109jStpw6AVsz9zCNuQ2LmJjoUf5kDbTwB+t+7OqhGvErBzZBAt1GlcGVsGs4zdmcPstbcjfefn7lncT4BAuHkxADVIgql09YpkHVpMEgG7B1IIsLUzHmvi6rMEyF6p7iF+B6/11Wz8ejXnrl6RbJ4Wk0RAes8hz9sqvOyEx++OfbyPAIKLnriMW1evSDZOi0kiYOMqm/uS8ZYZ2Hev/zZAGGZWB3c+IUxeFW95WdIOLVZEBKaGIxMR6DmrW1UI4PNhX/hGY6CuOQhElhcqEeCMznjsviK2SVdtE4FAXfNMILrHqhghBtAfampHxNmmggTrJ4z0neHAdWs2m6DFVRDIXru7vefvgkc72jEQblwLwL5jVhkihhJtsQ4VY3TZ4iAQDEfqCICv5Zj9vcYzx61W9/Ah5X/PX3GarWvNIRCcfdspxDLrzaM7daE/3LTL6jUt9OytLtULGbSrrREIzoweRt4e0+fveCLIcwDLix7dJsBTL621vGdQ1clXfP88qT0PZvWUun1W+IgJQN2cAB8h4jFmijyMnfTE8oX/VHVEuQJczgS4MhyZ4AF4x9x3tLnoSWCpA1zq9ll1zEA4EgL+iJbJn0HwJ762zDN80x0//Lr3RHvLqW6t85c6wKVun5lzZa7bJ6IODNY1TSFC/jqG+V8eDz7IDhmlDnCp22eGs8yDG0Q4BXmiYHhTXYJ3dVNosEtln3yRdT6XK3WAS92+/rAO1kUuJoLVVot7BPQlS1eOyWbI/nBkOQLUCRyXIoC5p4zw3evkrGCpA1zq9h3os+yJrTHjs49uWV3hny2DtDzZtqg+S4Dg7PnHGZh5T1goWw7eJYSVSLSmO1W5SfWG7lIHuNTt43sBqipT4wxgFyEYtTJP7PBHvMhgJ/CX0Q/YEGLrYQbpKC86GiYCWPQdr1pe1BBV/arlRdfxi+w3+f32ZLxlQTYQ5ASC0agPdvSuc/rpV00A64kuEcGdJgDfyjeyZ/tZuWdvD5ol44cPjDT9WfrWawn6aQKUDgH449tE7Dwe+nOu+8o0KZ89YoAvINBoCf8KRTQBSoQARF3k9V5suS18/3BQ3zwW0vQ7O+/imDFBE6D4BLDawW26UMK3ihlGdSOQ0SB6sMkqDGgCFI8A2feSEZagZ+9isxVd4UpZ3yfizwHxOgT4mjDmHyKgCVB4AvBlXiB6hJHn7gMPgfTnOyEBcoWumzdv6J7eyh8C0QUMjLMNwrGIMFL0Vo4mgNsEoD1EsJ0hbTGAvQmIr1VXpP7wyNKlu2U6qzQBzJSJPlNUCSDTCCsZ0WeWSL/oO15UXvS7yD5VfEX1awIIENIEEACkytBiAyzqIcW2TxVfUft0BNARQMQR699VGVrsHiZqfbHtU8VX1D4dAXQEEHFERwA1hKxL668AvS3cMgoP+CHAzd41EHRrAgwELyq0QRNAAbyBUFQTYCB4UaENmgAK4A2EopoAA8GLCm3QBFAAbyAU1QQYCF5UaIMmQJGnakW+E83kicqLftcE0ASwvEBDtOFGRLCiLwaJDBT97vZqnah+HQHCEVcZKnKAJkCLUidWKsyd4/YYpQngbgfTBBAxTPC7HgL0EKDciaw45naEVTbebQNFHVTnADoHsExCVUO0iGCq+kUEd7uDDfgIoOogTQABRd1mqKiHuO0gt/WL2uc2vjoCKM40qkYYTQARAkV2kI4AeghwNckU8V8PAToCuDrVrnOAIhNMRwARAooOEqkXJXE6ByjzHEATwBqBAT8EaAJoAlgioIcAURfRQ4D+DCzmcqWIn6IkTVReRwARQjoC6AigI4A5AqIIoti/XN9yp/wVIHp3sKcqXfPMkiWmjxeqAiQaAlQd5LZ+q/ZfG7qjJoW9n1vIpJLxlioVDJUJMDUU+ZQhjDIzwu2nZ912kNv6rZwnfPcP6T/JtkVHFZUAwVBkneWt4oT1yfaY1QPGKvYLH50q5wgQqIvMBYKlpp0LjDcS8dZzVQBUjgCBUPNKQLrJ1AiiDbj1g9MSiURGxVCzsm73ULf1m7WLPwBljBm/HgFOMpMxEO5f1dZyswqu6gQIR64GgMesjHDzCXq3HeS2flMCiJ9+B0CclmyLJYpKgCkNDcN83Z6tVreG81eqEPHSZLxljYqx/ZV120Fu6++vTf7Q/IsAjecQoMIMLyLYzTK+0YkV0S9VMFWOALxyf7j5QQS6wcqQPhLMw66NK5wcDtx2kNv6D8TswmjUe8SOnlkGwF1Wzs+WIXwg2R6rVXE+L+sQAeaPBzA2CI3OGk4biOFDBsEL3rRvkyqD3XaQ2/r5y61pb884L+APDKAbrMb8nLN5ZwIvfatzWeu/S4IA2ShQ17gEid2iatCh5UXHn0UOctqeQ/WJvjJEW7rysY8AWzvjsaZ8yh5axpEIwJVOnx6t2l3T/TIBO8cJw3I6NAEORtMgeH0v7Jr4fHt7ygmcHSMANyY485bRhse7DhGPccI4rkMT4CAkP0EPnpVYFtviFL6OEmDfUBA5FQl+DwBfd8JITYB9KBLRx4y8kxMdC95xAtecDscJkI0EoaYjgDBJDL6raqwmAAAP+55M79TEiru2quLpWg5wqOJLQqHKalYTAYPmIsLQfA0fzATo+3T+5W7adadTY37BCJCrKJsXVFTcDgZcnw8RBiMB+CQPIPwWPMZiJz71rDqfK0NAfxXy712o6J2cAZrIMnA6eOg4MuBwRPRZGTjQCZDt5Qz+Cxn8EBj8lQBeZmnfc6rzI7IR939SSb3e4yoEiAAAAABJRU5ErkJggg==';
const iconSettings =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAELJJREFUeF7tXXtwXNV5/31nV7KJ3w9KME0KJHFCmqkDpGBsGSPZtUMm4Mfu2mmBTDoQNzVeyY4ftSQPLK21sk2wrJUMKdPMeEIfhl09MA7hYUsYW6YEnEInbTCEAA0EgrEtgw2SVnu+zllJRJa0997de/fu6u7d/3bu+c45v9/3u+ee53cI7q+gGaCCRu+ChyuAAheBKwBXAIXHQOuhQ59D3FvHhEUKPQEHiXjzkrKS44XGRsG1AEnnJzwvATR1sLOZcZq8vbOWzp//u0ISQeEJ4EBHDAK+EZ1MiC4tnbvCFYCDGWg52PEhESaMBJHBHy4rK5nkYPjDoBVeC9DWwVoOXlo2t6A4KSiwyvGtrgDO078rgCHNgdsCOPwD6LYA5zvYbQHcFsDhr/wQeG4L4LYA7ihgkAbcT4D7CSisT4DWRBDAZ5aWlUwuJEYKrwU42NECwtKRnEygR5aUzVnpCsDBDDzaduTLkuk5Ikw5HyafTJD3677S2W87GL47FZycDVQrgtJ7HzMvVv8FxBO9JNYXmvP7l8Kzo/eW9ucuhZQ3gXApiP8XiDctKy3tzE5pzsp1/+HDU+K9tBxMXwXjTQjx2LLS697MBsqs9AFa2o6sAOinBIwZqDSD/0DgJUvL5j2fDSBOybPl4NFrQHIfgS76FBOji0DfXbJgTtRqnJYLIPnms3xlsPP/WGk+IwjfvLm05D+tBuKE/FrbDl8L0JMADV+SZnQlgK/4Fsx9y0qslgugta2jHEB9qkqqNXcPYbErgvMZamk7fDVYPD28czro9WGUL1swtyGvBdDS1nEfAT/UriSfAXix+znoY0nzzR9EJAM7l5XNXZ/fAmg/cjsx/Yt+JV0RpON8lZaJ71hWWvITfW6Np7D8E9DS3j4ZXPTKeZ2YlPUpbBEYffOT9DG/xyJ+hdUjKcsFMKBqBj1FoIn6WuQz0uO5bvn8636tn9Y5KVoPPPtVCHF0xA7fEJiq30TgRdn4ZGZFAKr++9qPzJaMJ4wAhOSfLV1Y8m2r3RsIBDzyoplXCo+cxSxmAvxlJr6cEjROCkwh5nF9TSudExKn2cPnhKTXmehVZj4uSL6Md19/KRqNJqyuW2tbx88AfEsv32x3mrMmAAXMSM+2r3nD2ZcOz5kUCpHUI0TveWBd9SVIsB+QCyTE9QSY2+XL3AnQsww6WMTx2N7GHb/Xq4Pe81CIxax5RztT7U4esM+281U5WRWA0U4Ogz+Of/D7iStWrMjoTfve90JjP5rU4yfGd5l5AREJPSdk8pyBBIEOMvFDE84Ux/bsCXVlks8jjzziKZo+40MCfSaVvR3Ot0UAxkRAzywtm1OaLpmB1aHx8PbczsAmADPStTeVnvh9MD1AXYm66IPbz6SbV2vb0XaAbxjJzi7n2yYALREw0O0hviGdiaFVq1YVnRo7rYIZlUTnH/FK1xEWpD9JoPCJqUWRZ0KhXqP5NR/ouI4E2ofPmNo7W5r1T8BgQpoPPXeFSMgfMWMegb0g8bwgWZmO8/3BynkEup8JXzNKth3pmOVxwLumqWHrAaPlKRF4CLUMvoZBvcT8rCzybLRzRGSrAAaIUZ2g+fOfEaWlpYbfmBuDwTHjaMJ9AFbb0Xcx6sQh6dR+w8Zz/NHGnzc0dBvNo7293Xvo0A3Sik6w0TIH0uVEAOlWcvmd1X8miB+GwLXp2uYiPTH/El5eGa3b9ptclJ9OmXkvAH951QIGNxubVBoOXfXcGXxMMB0G4RUwHyf2vF2U6O0cnzh19vSMGVT0h65xcY93csLDnxPMMxl8BQMlBLqaAE86hH6alrlTEi1vjoTbM7K3ySivBeArr1pBwE8xaF+BEV4YiBPj5wR+CN3y6Ux66aqcwKp/mMQXeBdB8q1MuJGAIiPlD0rTTcy3RhtqY2na2ZY8bwXgq6j8PiR+nOaY/iQxRwA8EG2oPWEli4Fg5YVMtJqZy9MZefTNHeAHsUjYwAKZlTU2lldeCkC9+WD+D+PO54/VUAy9xfXR+0NnjUHPLNXNmzZNKO7yru0bguICI7koEQjm7+RjS5B3AvAFtywkkvuNN/u03ysSwb27tmVlz1wqBwfWbLkM4EYWrDuf359HN0nxrWjj1jYjorErTV4JILBu8xdlgo4Z7PB1E9GGaH1No11kjVAO+YLVQUDeS0TFevVg4Aw88qqmum2/1Utr1/O8EYAa54/H+KNMdJUueOZ3ifimaGTbMd20NiRYXrH5L4k9+wj8Wd3iiF88J8+WpDNPoJuniQR5IwB/eZV6k+/Uw8KM3wgWi6KNW9/QS2vnc9+6zZejVzxJhC/qlkscidXXVuimsyFBXghgeUX19YL5Gb0ZvqTzE/F50fvvfc8MN0PjBLLgAx5Gpdk4gYHVGz8rPUWHDYiACXR9NFJzxAwOK2xzLoAbQiHv9JM9x0D4C01AxO8ze0qaIltfMwM8VZxAgE8lyDvL7Okg1TlkSnSA6GKtehLjV1O6P7jqwQcfjJvBY9Y25wLwl1duAOheHSDdBDnXim9+qw1xAlWfQLA4rDuSYVoXa6jZZdaJZuxzKoDbNmwYd667+E1BmK4FgoE1TZHwbjNAB2ztihPoC1aXE3HK8xH99TlJvcWXZnvuQrMlsoLUTPPwl1duAmi7tj3tj0Vqbsq0jKF2NsYHoMCa6v268wSEDbH6sFrlzMkvZy2A2sZ1dkL3b7W+lcz4RLD4cyt7/K0a8QEg0bR04Vy/VZ5Qq5gk+H+IkNx8OtKPQe8Jz8eXR+vqPrGq3HTyyZkAAuWVtzFILfSk/BGwJRoJ16QDSC+tRnyAUx6Pd/ZN82eb6mQOLT8QrLyLie7RxEm4JVof/ne9umfjeS4F8DSDFqZ8M5hPxS9IXLpvx46PrAZuZ3wAtXbg7fK+JTA0IMVgVPRELFJzo9U4jeSXEwGordsywW9prbUT893Rhtp/NAIi39P4y6tCAO7WELsUXvH5aF3NO3ZjyYkA/MHqtSCuS/1dRFwwX2L1kq7d5A6Up5aSJdE7WvsJiCiYi3WN3AigvPoxgLVOAj0ai4RHDOSUKyeaLTdQvnkfQ6QezUi0xBrDy82Wk6697QJIHte6+EsntU7sEHMgH9fO0yV3cPr+3U0Pp8pDAqc97752YTaOoel0tM3ASt+2f5bsFxrNf0J0JaZluo0r/RrZY/E3f795SneROKHZ74H8hhWznekgsr8FqKi8nbXiB0g8H2sMz04HxGhJ66+ofAFM30hVX2L8bbQhvMdOPLYLwFexeQex2Ji6BeCdTZFaS6Ng2EmoVln+iso6MK1NmYawPVYf3mxnfW0XgD9Y9SgIN6d8C4jviNbXWhoFw05CtcoKlFevYvA/p0yTg47giAIYvF6ue4SZ8VE69+75g1Uvay79Ml8fa6hVK2mO+wWClfOZSO17GPHHkl9qaqy9Ug+4lf4ZJoDH2o9+pVfyUa1oVSPXHp1EPFtvU4UvWPUGqeCRKX5eIS+ze4OnHuFWPU/uFRAy5X5ABr/RFKm9XKs8q/0zTAAtBzpaSWBJJqAZ1LysbM7Id/L1Z+gLVp7U2ldPnuJp0brQqUzKz3ebv14fmh6P96Q8ryAZHzQ3hC/UwmG1f4YLQONePT2Cjdy75wtWqt28KXfQ0tTiMdFQqEevrNH4vP+Aq1ZQie5YJDxWUwAW+8dSARiJt+8KYELOBDCSf4YJQHO9XOe1MxJv3/0EmPsEWO2fYQJIvV6u1+gai7fvdgLNdQKt9k/qYWB/PH29Uzrqu59OvH13GGjRMNAi/+TdRBCA7+frSVq9NlDvuT9Y+Xcg+nHeTwTpATHz3J0KLvCp4IDOYpAE/6I5UjsqQsGk+yL4yqtfJPDVqewKYjHIyHJwQhRPb90VctT1MkaWg6XA1c27wr9MV1hm0tveBzCyIQREK2L1NZZfj2KGKLO2gYrqlcy8N1U+BbMhRBGguz0KcNyWML/eNrgcrAQqX9jeAvQJoKqCgZRn4lSQJydtCl32g9CfiOKet7U2hVp5/C2d1ionAvjOmk0z4sL7fzoh2EKxSFjzQEU6QHOZ1ldRfQ8x35WqDskYQr3xPzV77D0TjDkRgKqov7zqKQB/lZKULB4MyYSoTG1uCd498ROKv+keDBnCoK+i6lZiPKRD7F2xSPifMiU/H+z0DoUkv8OFeDQseTh0Ys/rWmHe1eFQeOXX8imoUjqiWhnc8oVeSvyKQCmXeAv2cGiyMxis2siEHVqkkqTHo4016hCJCsQ8mn7kL69+HOBvauIDrY9GanbmCljO+gAKsOEAEUwVTQ01KgLoqPn5KqrWEUPPsYUdICLZGayoWg/Gj7Q8y8w9LLikuX7bC6NBAYFg9TUS8rBe7EAC1kYjYb0oIlmFnNMWQCFTQaIuPBV/kcGzNEUAnPAmuOTh3bWvZpURk5knw8UlPB16MQPdIFGDiFa3gIDokN7ElFVh4kz6OKV5OmHipOR5zY21Hdmqi9F8c94CDFTUX16lvvFBvYorEcArF+fbyKC/x/8kgb6giwGob4qEU58Q0svAwud5IwC1Y/YzNFE1nSmXSwdwq6ETU+LmfOkT+CoqryVJ6sTTRXq+IcYLmFZcki87n/NGAIq4vrdIHjN42WM3M21qaqhR16nnaohI/mB1BUNu1+vwJYXB3EnsucrKoFd6gtN7nlcCUJUNrNlSxkI+rhtksR+ZmicAaI3dpCqxJogb9cb5f2y1uIuE58bYrq0pj4bpOSsbz/NOAH1Dw+oAS7nX6IURasaQCNt7xvbuzEZQqcHEq7n9bor/kBmb0rkwAkQrm+prmrLhRDN55qUAFKBMroxRmyoEECHm3VbHF0ou6Y6J38nMQe2FnfPd4V4ZY0KeqiUAs1owGpNONsn9BJBPSIh/TYjipzLdXqa2ccWLPYuYcSuDF2dyaRQT3ZKPb/4An3nbAgxUUPUJpJDNBjuGw3SSfAOJ/wvAEWLxa7A8Lr38O4GxnZiEvvuFzmC8RNdkYu/nSfJMJnkFgBJmutLMtXHweJbl2zd/KEF5LwBVYRVy1eNJ7GWIURE6hkHHvEwrH27YqlY78/o3KgSgGOw/WavCyq/RmzHMIePMQERMLd6UL+N8PS5GjQA+/SSUV5cw827dCyb0kFv9nPHfknl1PkzvpgNt1AlAgVMLSNNO9wRZokrvroF0yMgkrQrq4CFsPTG1eHc618dnUlY2bEalAAaIUPsJunqK75CSN5KgS7JBUMo8id8H0wNjuGjnvzXc86GtZVtY2KgWwAAPfXcPxH0EeZskWphxz12H2L4xPT1NxA+NO1PcvGdPSCvYg4Vuyl5WjhDAYHqWr6262MPkg+QFCcL8dCZtRqI5eWKHcUgSDojeeFMutm5nz/05OhiSTUCD81bH0BKXfGkWJfB1EpiJBNTV8JepmAdMPBnA+P70Z4mpU8U6INAb8OBVdc28FPSy553XXrY7fq9d/KhyHNcC2EmeE8pyBeAEL5rA4ArABHlOMHUF4AQvmsDgCsAEeU4wdQXgBC+awOAKwAR5TjB1BeAEL5rA4ArABHlOMHUF4AQvmsDgCsAEeU4wdQXgBC+awOAKwAR5TjB1BeAEL5rA4ArABHlOMHUF4AQvmsDgCsAEeU4wdQXgBC+awOAKwAR5TjB1BeAEL5rA4ArABHlOMHUF4AQvmsDgCsAEeU4wdQXgBC+awOAKwAR5TjB1BeAEL5rA4ArABHlOMHUF4AQvmsDw/wcVDury07ujAAAAAElFTkSuQmCC';