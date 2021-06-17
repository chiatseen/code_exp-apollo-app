//there should not be any import of View/Text/Button here
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("clinics.db")

const PolyClinics = [
    {name: "Ang Mo Kio Polyclinic", id: 0,
        address: "Block 723 Ang Mo Kio Avenue 8 #01-4136 Singapore 560723",
        telephone: "6355-3000",
        latitude: "1.37241",
        longitude: "103.84731",
        cluster: "NHG",
        crowd: 256},
    {name: "Bedok Polyclinic", id: 1,
        address: "Block 212 Bedok North Street 1 #03-147 Singapore 460212",
        telephone: "6243-6740 (General), 6643-6969 (Appt)",
        latitude: "1.32625",
        longitude: "103.93126",
        cluster: "Singhealth",
        crowd: 815},
    {name: "Bukit Batok Polyclinic", id: 2,
        address: "50 Bukit Batok West Avenue 3 Singapore 659164",
        telephone: "6355-3000",
        latitude: "1.35210",
        longitude: "103.74784",
        cluster: "NHG",
        crowd: 292},
    {name: "Bukit Merah Polyclinic", id: 3,
        address: "Block 163 Bukit Merah Central #04-3565 Singapore 150163",
        telephone: "6271-3911 (General), 6643-6969 (Appt)",
        latitude: "1.28420",
        longitude: "103.81700",
        cluster: "Singhealth",
        crowd: 101},
    {name: "Choa Chu Kang Polyclinic", id: 4,
        address: "2 Teck Whye Crescent Singapore 688846",
        telephone: "6355-3000",
        latitude: "1.3823009",
        longitude: "103.7419142",
        cluster: "NHG",
        crowd: 503},
    {name: "Clementi Polyclinic", id: 5,
        address: "Block 451 Clementi Avenue 3 #02-307 Singapore 120451",
        telephone: "6355-3000",
        latitude: "1.3123302",
        longitude: "103.7639949",
        cluster: "NHG",
        crowd: 111},
    {name: "Geylang Polyclinic", id: 6,
        address: "21 Geylang East Central Singapore 389707",
        telephone: "6842-2440 (General), 6643-6969 (Appt)",
        latitude: "1.3194759",
        longitude: "103.8784022",
        cluster: "Singhealth",
        crowd: 305},
    {name: "Hougang Polyclinic", id: 7,
        address: "89 Hougang Avenue 4 Singapore 538829",
        telephone: "6355-3000",
        latitude: "1.370032",
        longitude: "103.8802692",
        cluster: "NHG",
        crowd: 681},
    {name: "Jurong Polyclinic", id: 8,
        address: "190 Jurong East Avenue 1 Singapore 609788",
        telephone: "6355-3000",
        latitude: "1.349792",
        longitude: "103.7218642",
        cluster: "NHG",
        crowd: 276},
    {name: "Marine Parade Polyclinic", id: 9,
        address: "Block 80 Marine Parade #01-792 Singapore 440080",
        telephone: "6345-0049 (General), 6643-6969 (Appt)",
        latitude: "1.302256",
        longitude: "103.8988422",
        cluster: "Singhealth",
        crowd: 401},
    {name: "Outram Polyclinic", id: 10,
        address: "No.3 Second Hospital Avenue Singapore 168937",
        telephone: "6435-3980 (General), 6643-6969 (Appt)",
        latitude: "1.279555",
        longitude: "103.8296142",
        cluster: "Singhealth",
        crowd: 713},
    {name: "Pasir Ris Polyclinic", id: 11,
        address: "1 Pasir Ris Drive 4 #01-11 Singapore 519457",
        telephone: "6585-5390 (General), 6643-6969 (Appt)",
        latitude: "1.368309",
        longitude: "103.9507742",
        cluster: "Singhealth",
        crowd: 420},
    {name: "Queenstown Polyclinic", id: 12,
        address: "580 Stirling Road Singapore 148958",
        telephone: "6471-9530 (General), 6643-6969 (Appt)",
        latitude: "1.298484",
        longitude: "103.7922042",
        cluster: "Singhealth",
        crowd: 133},
    {name: "Sengkang Polyclinic", id: 13,
        address: "2 Sengkang Square #01-06 Sengkang Community Hub Singapore 545025",
        telephone: "6315-3500 (General), 6643-6969 (Appt)",
        latitude: "1.392501",
        longitude: "103.8856092",
        cluster: "NHG",
        crowd: 426},
    {name: "Tampines Polyclinic", id: 14,
        address: "1 Tampines Street 41 Singapore 529203",
        telephone: "6786-4070 (General), 6643-6969 (Appt)",
        latitude: "1.3572569",
        longitude: "103.9372842",
        cluster: "Singhealth",
        crowd: 186},
    {name: "Toa Payoh Polyclinic", id: 15,
        address: "Block 2003 Lorong 8 Toa Payoh Singapore 319260",
        telephone: "6355-3000",
        latitude: "1.3345498",
        longitude: "103.8502312",
        cluster: "NHG",
        crowd: 172},
    {name: "Woodlands Polyclinic", id: 16,
        address: "10 Woodlands Street 31 Singapore 738579",
        telephone: "6355-3000",
        latitude: "1.430806",
        longitude: "103.7663172",
        cluster: "NHG",
        crowd: 134},
    {name: "Yishun Polyclinic", id: 17,
        address: "100, Yishun Central Singapore 768826",
        telephone: "6355-3000",
        latitude: "1.4233689",
        longitude: "103.8283212",
        cluster: "NHG",
        crowd: 215}
]

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}


export function distancecalc(lat1, lon1,lat2,lon2){
    //finds straight line distance from two lat/long coordinates
    const earthRadiusKm = 6371;

    var dLat = degreesToRadians(Math.abs(lat2-lat1));
    var dLon = degreesToRadians(Math.abs(lon2-lon1));

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
}

export function filterClinic(userloc){
    var filtered=[]
    if (userloc === null) return ([]);
    for (let i=0; i<PolyClinics.length; i++){
        const Clinic = PolyClinics[i]
        if (distancecalc(Clinic.latitude,Clinic.longitude,userloc.latt,userloc.longt)<6){
        filtered.push(Clinic);
        }
    }
    return filtered;
}


