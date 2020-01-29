import * as React from 'react';
import styles from './Footer.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

// Iconos
const ChevronRightIcon = () => <Icon
  iconName="ChevronRightMed"
  className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Title_Ico}
/>;

const YouTubeIcon = () => <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={styles.SVGCircle} fillRule="evenodd" clipRule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z" fill="white"></path>
  <path className={styles.SVGlogo} fillRule="evenodd" clipRule="evenodd" d="M23.1985 12.1316C23.8174 12.3034 24.3048 12.8099 24.4702 13.4528C24.7708 14.6184 24.7708 17.05 24.7708 17.05C24.7708 17.05 24.7708 19.4818 24.4702 20.6473C24.3048 21.2902 23.8174 21.7968 23.1985 21.9685C22.0767 22.2809 17.5785 22.2809 17.5785 22.2809C17.5785 22.2809 13.0803 22.2809 11.9586 21.9685C11.3396 21.7968 10.8523 21.2902 10.6869 20.6473C10.3862 19.4818 10.3862 17.05 10.3862 17.05C10.3862 17.05 10.3862 14.6184 10.6869 13.4528C10.8523 12.8099 11.3396 12.3034 11.9586 12.1316C13.0803 11.8193 17.5785 11.8193 17.5785 11.8193C17.5785 11.8193 22.0767 11.8193 23.1985 12.1316ZM19.8771 17.0502L16.1401 14.8082V19.2918L19.8771 17.0502Z" fill="#535252"></path>
</svg>;


const LinkedInIcon = () => <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={styles.SVGCircle} fillRule="evenodd" clipRule="evenodd" d="M17.75 34C27.1388 34 34.75 26.3888 34.75 17C34.75 7.61116 27.1388 0 17.75 0C8.36116 0 0.75 7.61116 0.75 17C0.75 26.3888 8.36116 34 17.75 34Z" fill="white"></path>
  <path className={styles.SVGlogo} fillRule="evenodd" clipRule="evenodd" d="M15.3613 14.4439H18.1932V15.725H18.2328C18.6269 14.9879 19.5902 14.2109 21.0265 14.2109C24.0165 14.2109 24.5685 16.1526 24.5685 18.6763V23.8185H21.6179V19.2596C21.6179 18.1725 21.5976 16.7741 20.0836 16.7741C18.5474 16.7741 18.3114 17.9583 18.3114 19.1809V23.8185H15.3613V14.4439Z" fill="#535252"></path>
  <path className={styles.SVGlogo} fillRule="evenodd" clipRule="evenodd" d="M12.1594 9.80762C13.0424 9.80762 13.7601 10.5633 13.7601 11.4935C13.7601 12.4246 13.0424 13.1803 12.1594 13.1803C11.2741 13.1803 10.5576 12.4246 10.5576 11.4935C10.5576 10.5633 11.2741 9.80762 12.1594 9.80762Z" fill="#535252"></path>
  <path className={styles.SVGlogo} fillRule="evenodd" clipRule="evenodd" d="M10.7778 23.8185H13.54V14.4595H10.7778V23.8185Z" fill="#535252"></path>
</svg>;

const FacebookIcon = () => <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={styles.SVGCircle} fillRule="evenodd" clipRule="evenodd" d="M17.5 34C26.8888 34 34.5 26.3888 34.5 17C34.5 7.61116 26.8888 0 17.5 0C8.11116 0 0.5 7.61116 0.5 17C0.5 26.3888 8.11116 34 17.5 34Z" fill="white"></path>
  <path className={styles.SVGlogo} d="M18.5355 25.1512V17.5656H21.0927L21.4758 14.5965H18.5355V12.7054C18.5355 11.8476 18.7738 11.2634 20.0035 11.2634H21.562V8.61493C21.2908 8.57892 20.3602 8.5 19.2779 8.5C17.0176 8.5 15.4706 9.87921 15.4706 12.4131V14.5969H12.9229V17.5656H15.4706V25.1512H18.5355Z" fill="#535252"></path>
</svg>;

const TwitterIcon = () => <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={styles.SVGCircle} fillRule="evenodd" clipRule="evenodd" d="M17.25 34C26.6388 34 34.25 26.3888 34.25 17C34.25 7.61116 26.6388 0 17.25 0C7.86116 0 0.25 7.61116 0.25 17C0.25 26.3888 7.86116 34 17.25 34Z" fill="white"></path>
  <path className={styles.SVGlogo} fillRule="evenodd" clipRule="evenodd" d="M14.982 22.49C20.1065 22.49 22.9094 18.365 22.9094 14.7878C22.9094 14.6707 22.9094 14.554 22.9013 14.4379C23.4465 14.0547 23.9172 13.5802 24.2913 13.0367C23.7828 13.2556 23.2434 13.3992 22.6911 13.4626C23.2727 13.1243 23.708 12.5922 23.916 11.9654C23.369 12.2807 22.7707 12.5029 22.1468 12.6224C21.2831 11.7302 19.9108 11.5118 18.7994 12.0897C17.6879 12.6677 17.1137 13.8982 17.3987 15.0913C15.1585 14.9822 13.0713 13.9541 11.6566 12.263C10.9171 13.4999 11.2948 15.0822 12.5192 15.8766C12.0758 15.8638 11.6421 15.7476 11.2546 15.5378C11.2546 15.5489 11.2546 15.5605 11.2546 15.5721C11.255 16.8607 12.1899 17.9705 13.4899 18.2257C13.0797 18.3344 12.6493 18.3503 12.2318 18.2721C12.5968 19.3748 13.6428 20.1303 14.8348 20.152C13.8482 20.9054 12.6295 21.3143 11.3747 21.3131C11.153 21.3127 10.9315 21.2996 10.7114 21.274C11.9856 22.0685 13.4681 22.4899 14.982 22.4879" fill="#535252"></path>
</svg>;

const InstagramIcon = () => <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path className={styles.SVGCircle} fillRule="evenodd" clipRule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z" fill="white"></path>
  <path className={styles.SVGlogo} d="M17.0245 12.897C14.7322 12.897 12.8984 14.7308 12.8984 17.023C12.8984 19.3153 14.7322 21.1491 17.0245 21.1491C19.3168 21.1491 21.1506 19.3153 21.1506 17.023C21.1506 14.7308 19.3168 12.897 17.0245 12.897ZM17.0245 19.6821C15.5575 19.6821 14.3655 18.4901 14.3655 17.023C14.3655 15.556 15.5575 14.364 17.0245 14.364C18.4916 14.364 19.6835 15.556 19.6835 17.023C19.6835 18.4901 18.4916 19.6821 17.0245 19.6821Z" fill="#535252"></path>
  <path className={styles.SVGlogo} d="M25 13.7221C24.9542 12.851 24.8166 12.3009 24.6332 11.7966C24.4499 11.2464 24.1748 10.8338 23.7163 10.3754C23.2579 9.91691 22.8453 9.64183 22.2951 9.45845C21.7908 9.27507 21.1948 9.13754 20.3696 9.09169C19.4527 9 19.2235 9 17.0229 9C14.8223 9 14.5931 9 13.7221 9.04585C12.851 9.09169 12.255 9.22923 11.7507 9.41261C11.2006 9.59599 10.788 9.87106 10.3295 10.3295C9.87106 10.788 9.64183 11.2464 9.41261 11.7507C9.22923 12.255 9.09169 12.851 9.04585 13.6762C9 14.5931 9 14.8223 9 17.0229C9 19.2235 9 19.4527 9.04585 20.3238C9.09169 21.1948 9.22923 21.745 9.41261 22.2493C9.59599 22.7994 9.87106 23.212 10.3295 23.6705C10.788 24.1289 11.2006 24.404 11.7507 24.5874C12.255 24.7708 12.851 24.9083 13.6762 24.9542C14.5473 25 14.8223 25 16.9771 25C19.1776 25 19.4069 25 20.2779 24.9542C21.149 24.9083 21.6991 24.7708 22.2034 24.5874C22.7536 24.404 23.1662 24.1289 23.6246 23.6705C24.0831 23.212 24.3582 22.7994 24.5415 22.2493C24.7249 21.745 24.8625 21.149 24.9083 20.3238C24.9542 19.4527 24.9542 19.1776 24.9542 17.0229C25.0458 14.8223 25.0458 14.5931 25 13.7221ZM23.533 20.2779C23.4871 21.0573 23.3496 21.4699 23.2579 21.745C23.1203 22.1117 22.937 22.3868 22.6619 22.6619C22.3868 22.937 22.1117 23.1203 21.745 23.2579C21.4699 23.3496 21.0573 23.4871 20.2779 23.533C19.4527 23.5788 19.1776 23.5788 17.0229 23.5788C14.8682 23.5788 14.639 23.5788 13.7679 23.533C12.9885 23.4871 12.5759 23.3496 12.3009 23.2579C11.9341 23.1203 11.659 22.937 11.384 22.6619C11.1089 22.3868 10.9255 22.1117 10.788 21.745C10.6963 21.4699 10.5587 21.0573 10.5129 20.2779C10.467 19.4527 10.467 19.1776 10.467 17.0229C10.467 14.8682 10.467 14.639 10.5129 13.7679C10.5587 12.9885 10.6963 12.5759 10.788 12.3009C10.9255 11.9341 11.1089 11.659 11.384 11.384C11.659 11.1089 11.9341 10.9255 12.3009 10.788C12.5759 10.6963 12.9885 10.5587 13.7679 10.5129C14.5931 10.467 14.8682 10.467 17.0229 10.467C19.1776 10.467 19.4069 10.467 20.2779 10.5129C21.0573 10.5587 21.4699 10.6963 21.745 10.788C22.1117 10.9255 22.3868 11.1089 22.6619 11.384C22.937 11.659 23.1203 11.9341 23.2579 12.3009C23.3496 12.5759 23.4871 12.9885 23.533 13.7679C23.5788 14.5931 23.5788 14.8682 23.5788 17.0229C23.5788 19.1776 23.5788 19.4069 23.533 20.2779Z" fill="#535252"></path>
  <path className={styles.SVGlogo} d="M21.285 13.7221C21.8167 13.7221 22.2478 13.2911 22.2478 12.7594C22.2478 12.2277 21.8167 11.7966 21.285 11.7966C20.7533 11.7966 20.3223 12.2277 20.3223 12.7594C20.3223 13.2911 20.7533 13.7221 21.285 13.7221Z" fill="#535252"></path>
</svg>;

export default class Footer extends React.Component {

  public render() {

    const ImgLogoYPF = require("img/Footer/Logo_ypf.svg");

    return (
      <footer className={styles.Footer}>
        <div className={styles.Footer_Container}>
          <div className={styles.Footer_Container_Row}>
            <div className={styles.Footer_Container_Row_Left}>
              <div className={styles.Footer_Container_Row_Left_Copy}>
                © YPF 2016
                <span className={styles.Footer_Container_Row_Left_Copy_Spacer}>|</span>
                <a className={styles.Footer_Container_Row_Left_Copy_Link} href="https://www.ypf.com/Paginas/TerminosYCondiciones.aspx" target="_blank">
                  Términos y condiciones
                </a>
                <span className={styles.Footer_Container_Row_Left_Copy_Spacer}>|</span>
                <a className={styles.Footer_Container_Row_Left_Copy_Link} href="https://www.ypf.com/Extranet/Paginas/Extranet-de-YPF.aspx" target="_blank">
                  Extranets
                </a>
                <span className={styles.Footer_Container_Row_Left_Copy_Spacer}>|</span>
                <a className={styles.Footer_Container_Row_Left_Copy_Link} href="https://www.ypf.com/Proveedores/Paginas/Ser-proveedor-de-ypf.aspx" target="_blank">
                  Proveedores
                </a>
                <span className={styles.Footer_Container_Row_Left_Copy_Spacer}>|</span>
                <a className={styles.Footer_Container_Row_Left_Copy_Link} href="https://www.ypf.com/Paginas/Proteccion-al-usuario-de-Servicios-Financieros.aspx" target="_blank">
                  Com. "A" 5460 BCRA
                </a>
              </div>
            </div>

            <div className={styles.Footer_Container_Row_Right}>
              <a href="#" className={styles.Footer_Container_Row_Right_Logo} style={{ backgroundImage: `url(${ImgLogoYPF})` }}></a>

              <div className={styles.Footer_Container_Row_Right_Redes}>
                <p className={styles.Footer_Container_Row_Right_Redes_Titulo}>
                  Nuestras redes sociales
                </p>


                <div className={styles.Footer_Container_Row_Right_Redes_Accordion}>
                  {/* ITEM ACCORDION */}
                  <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item}>
                    <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Title}>
                      <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Title_Text}>
                        YPF.COM
                      </div>
                      <ChevronRightIcon />
                    </div>
                    <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content}>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Youtube" href="https://www.youtube.com/ypfoficial" target="_blank">
                        <YouTubeIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Linkedin" href="https://www.linkedin.com/company/ypf-s-a-?trk=tyah&amp;trkInfo=tas%3AYPF%2Cidx%3A1-1-1" target="_blank">
                        <LinkedInIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Facebook" href="https://www.facebook.com/YPFoficial" target="_blank">
                        <FacebookIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Twitter" href="https://twitter.com/YPFoficial" target="_blank">
                        <TwitterIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Instagram" href="https://www.instagram.com/ypfoficial/?C=todo-sobre-ypf" target="_blank">
                        <InstagramIcon />
                      </a>
                    </div>
                  </div>
                  {/* ITEM ACCORDION */}
                  <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item  + ' ' + styles.Closed}>
                    <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Title}>
                      <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Title_Text}>
                        YPF Serviclub
                      </div>
                      <ChevronRightIcon />
                    </div>
                    <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content}>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Youtube" href="https://www.youtube.com/playlist?list=PLi-tJ8ciWyAnOC7jDgf8dCC4-BvEae8hx">
                        <YouTubeIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Facebook" href="https://www.facebook.com/YPFServiClub">
                        <FacebookIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Twitter" href="https://twitter.com/YPFServiclub">
                        <TwitterIcon />
                      </a>
                    </div>
                  </div>
                  {/* ITEM ACCORDION */}
                  <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item  + ' ' + styles.Closed}>
                    <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Title}>
                      <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Title_Text}>
                        Fundación YPF
                      </div>
                      <ChevronRightIcon />
                    </div>
                    <div className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content}>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Youtube" href="https://www.youtube.com/user/fundacionypf">
                        <YouTubeIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Facebook" href="https://www.facebook.com/FundacionYPF?fref=ts">
                        <FacebookIcon />
                      </a>
                      <a className={styles.Footer_Container_Row_Right_Redes_Accordion_Item_Content_SocialNetwork} title="Twitter" href="https://twitter.com/FundacionYPF?lang=es">
                        <TwitterIcon />
                      </a>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </footer>
    );
  }
}