import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid2";
import Lottie from "react-lottie-player";
import lottiejson from '/public/mainpage.json'
import styles from './mainpage.module.css'
import { useRouter } from 'next/router';

export default function Mainpage(){
    const router = useRouter();
    const handleClick = () => {
        router.push('/about-me');
    };
    return(
        <>
            
            <Grid container spacing={10}>
                <Grid size={4}>
                    <div className={styles.introduce}>
                        <h2 style={{fontSize:35}}>안녕하세요</h2>
                        <p>
                        안녕하세요. 저는 충주상업고등학교 스마트IT과에 재학 중인 김정식 입니다. 군에 대한 깊은 관심과 봉사 정신으로 부사관을 꿈꾸고 있습니다.
                         학교에서 정보 기술과 문제 해결, 협업을 배우며 필요한 역량을 기르고 있습니다. 부사관으로서 군의 전투력과 조직력을 강화하고, 
                         스마트IT 기술을 활용하여 부대의 효율성을 높이려 합니다. 강한 책임감과 성실함으로 맡은 역할을 충실히 수행하며, 국가에 기여하는 인재가 되겠습니다. 감사합니다.
                        </p>
                        <Button variant="contained" onClick={handleClick}>프로젝트 보러가기</Button>
                    </div>
                </Grid>
                <Grid size={7}>
                    <div>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}