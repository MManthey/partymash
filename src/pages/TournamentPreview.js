import React from "react"
import TournamnetType from "../components/TournamentType"
import { Grid } from '@material-ui/core'
import koTournamentImage from "../images/ko-turnier.jpg"
import roundTournamentImage from "../images/runden-turnier.jpg"

/*
    Besteht aus:
   |- Navbar
   |- TournamentType
        |- TournamentCoverImage
            |- Image
            |- InfoIcon
            |- Modal
                |- HeaderImage
                |- Infotext
                |- ProsList
                |- ConsList
        |- Button
    |- TournamentType

*/
class TournamentPreview extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    

    render(){
        const gridItemStyle = {
            //width: "100%",
            marginTop : '20px',
        }
        return(
            <Grid
                container
                direction="row"
                spacing={3}
                justify="center"
            >
                <TournamnetType tournamentType="ko" name="K.O. Turnier" src={koTournamentImage}/>
                <TournamnetType tournamentType="round" name="Rundenturnier" src={roundTournamentImage}/>
            </Grid>
        )
    }
}

export default TournamentPreview;