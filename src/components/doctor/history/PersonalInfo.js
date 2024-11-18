import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Input  from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import Label from './ui/Label';
import Separator from './ui/Separator';
import Button  from './ui/button';
import Calendar  from './ui/Calendar';
import Popover from './ui/Popover';
import PopoverContent from './ui/Popover';
import PopoverTrigger  from './ui/Popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const PersonalInfo = ({ personalInfo, handleInputChange }) => {
  const handleDateSelect = (date) => {
    handleInputChange('personalInfo', 'dateOfBirth', date);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="space-y-2">
  <label for="prefix">Prefix</label>
  <select
    id="prefix"
    value={personalInfo.prefix}
    onChange={(e) => handleInputChange('personalInfo', 'prefix', e.target.value)}
    class="form-select block w-full mt-1"
  >
    <option value="">Select Prefix</option>
    <option value="Mr.">Mr.</option>
    <option value="Mrs.">Mrs.</option>
    <option value="Miss">Miss</option>
    <option value="Dr.">Dr.</option>
    <option value="Prof.">Prof.</option>
  </select>
</div>

          <div className="space-y-2">
          <label for="name">Name:</label>
          <Input
              id="name"
              placeholder="e.g., John Kagwa"
              value={personalInfo.name}
              onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
  <div className="space-y-2">
  <Label htmlFor="dateOfBirth">Date of Birth</Label>
  <input
    type="date"
    id="dateOfBirth"
    value={personalInfo.dateOfBirth ? personalInfo.dateOfBirth.toISOString().split('T')[0] : ''}
    onChange={(e) => handleDateSelect(new Date(e.target.value))}
    className="form-input block w-full mt-1"
    aria-label="Select patient's date of birth"
  />

</div>


</div>

          <div className="space-y-2">
  <Label htmlFor="gender">Gender</Label>
  <select
    id="gender"
    value={personalInfo.gender}
    onChange={(e) => handleInputChange('personalInfo', 'gender', e.target.value)}
    className="form-select"
  >
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="intersex">Intersex</option>
    <option value="prefer_not_to_say">Prefer not to say</option>
  </select>
</div>

        </div>

        <Separator />

        <div className="space-y-2">
  <Label htmlFor="occupation">Occupation</Label>
  <select
    id="occupation"
    value={personalInfo.occupation}
    onChange={(e) => handleInputChange('personalInfo', 'occupation', e.target.value)}
    className="form-select"
  >
    <option value="">Select Occupation</option>
    <option value="farmer">Farmer</option>
    <option value="teacher">Teacher</option>
    <option value="doctor">Doctor</option>
    <option value="nurse">Nurse</option>
    <option value="engineer">Engineer</option>
    <option value="businessperson">Businessperson</option>
    <option value="accountant">Accountant</option>
    <option value="student">Student</option>
    <option value="civil_servant">Civil Servant</option>
    <option value="mechanic">Mechanic</option>
    <option value="welder">Welder</option>
    <option value="trader">Trader</option>
    <option value="journalist">Journalist</option>
    <option value="architect">Architect</option>
    <option value="lawyer">Lawyer</option>
    <option value="electrician">Electrician</option>
    <option value="hairdresser">Hairdresser</option>
    <option value="plumber">Plumber</option>
    <option value="salesperson">Salesperson</option>
    <option value="driver">Driver</option>
    <option value="chef">Chef</option>
    <option value="carpenter">Carpenter</option>
    <option value="fisherman">Fisherman</option>
    <option value="tailor">Tailor</option>
    <option value="security_guard">Security Guard</option>
    <option value="construction_worker">Construction Worker</option>
    <option value="taxi_driver">Taxi Driver</option>
    <option value="boda_boda_rider">Boda Boda Rider</option>
    <option value="politician">Politician</option>
    <option value="pastor">Pastor</option>
    <option value="other">Other</option>
  </select>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
  <Label htmlFor="maritalStatus">Marital Status</Label>
  <select
    id="maritalStatus"
    value={personalInfo.maritalStatus}
    onChange={(e) => handleInputChange('personalInfo', 'maritalStatus', e.target.value)}
    className="form-select"
  >
    <option value="">Select Marital Status</option>
    <option value="single">Single</option>
    <option value="married">Married</option>
    <option value="divorced">Divorced</option>
    <option value="widowed">Widowed</option>
    <option value="separated">Separated</option>
    <option value="cohabiting">Cohabiting</option>
    <option value="polygamous">Polygamous</option>
    <option value="customary">Customary</option>
    <option value="betrothed">Betrothed</option>
  </select>
</div>


          <div className="space-y-2">
            <Label htmlFor="name">Full Name of Next of Kin</Label>
            <Input
              id="name"
              placeholder="e.g., John Kagwa"
              value={personalInfo.nok}
              onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
            />
          </div>
          <div className="space-y-2">
  <Label htmlFor="nationality">Nationality</Label>
  <select
    id="nationality"
    value={personalInfo.nationality}
    onChange={(e) => handleInputChange('personalInfo', 'nationality', e.target.value)}
    className="form-select block w-full mt-1"
  >
    <option value="">Select Nationality</option>
    <option value="Ugandan">Ugandan</option>
    <option value="Kenyan">Kenyan</option>
    <option value="Tanzanian">Tanzanian</option>
    <option value="Rwandan">Rwandan</option>
    <option value="Burundian">Burundian</option>
    <option value="Congolese">Congolese</option>
    <option value="South Sudanese">South Sudanese</option>
    <option value="Other">Other</option>
  </select>
</div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="space-y-2">
    <Label htmlFor="tribe">Tribe</Label>
    <select
      id="tribe"
      value={personalInfo.tribe}
      onChange={(e) => handleInputChange('personalInfo', 'tribe', e.target.value)}
      className="form-select"
    >
      <option value="">Select Tribe</option>
      <option value="muganda">Muganda</option>
      <option value="musoga">Musoga</option>
      <option value="mukiga">Mukiga</option>
      <option value="munyoro">Munyoro</option>
      <option value="mutooro">Mutooro</option>
      <option value="munyankole">Munyankole</option>
      <option value="mugisu">Mugisu</option>
      <option value="mukonjo">Mukonjo</option>
      <option value="langi">Langi</option>
      <option value="acholi">Acholi</option>
      <option value="itesot">Itesot</option>
      <option value="samia">Samia</option>
      <option value="aringa">Aringa</option>
      <option value="ngikurungi">Ngikurungi</option>
      <option value="madi">Madi</option>
      <option value="alur">Alur</option>
      <option value="lugisu">Lugisu</option>
      <option value="luo">Luo</option>
      <option value="nkore">Nkore</option>
      <option value="munyole">Munyole</option>
      <option value="musamia">Musamia</option>
      <option value="mugwere">Mugwere</option>
      <option value="mufumbira">Mufumbira</option>
      <option value="munyabindi">Munyabindi</option>
      <option value="musongora">Musongora</option>
      <option value="munyarwanda">Munyarwanda</option>
      <option value="other">Other</option>
    </select>
  </div>
</div>

          <div className="space-y-2">
  <Label htmlFor="religion">Religion</Label>
  <select
    id="religion"
    value={personalInfo.religion}
    onChange={(e) => handleInputChange('personalInfo', 'religion', e.target.value)}
    className="form-select"
  >
    <option value="">Select Religion</option>
    <option value="catholic">Catholic</option>
    <option value="anglican">Anglican</option>
    <option value="pentecostal">Pentecostal</option>
    <option value="orthodox">Orthodox</option>
    <option value="baptist">Baptist</option>
    <option value="seventh-day adventist">Seventh-day Adventist</option>
    <option value="evangelical">Evangelical</option>
    <option value="african independent churches">African Independent Churches</option>
    <option value="sunni">Sunni</option>
    <option value="shia">Shia</option>
    <option value="bahá'í faith">Bahá'í Faith</option>
    <option value="traditional african religions">Traditional African Religions</option>
    <option value="hinduism">Hinduism</option>
    <option value="judaism">Judaism</option>
    <option value="other">Other</option>
  </select>
</div>

        </div>

        <Separator />


        <div className="space-y-2">
  <Label htmlFor="address">Address</Label>
  <select
    id="address"
    value={personalInfo.address}
    onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
    className="form-select"
  >
    <option value="">Select Patient's district</option>
    <option value="abim">Abim</option>
    <option value="adjumani">Adjumani</option>
    <option value="agago">Agago</option>
    <option value="alekot">Alebtong</option>
    <option value="amolatar">Amolatar</option>
    <option value="amudat">Amudat</option>
    <option value="amuria">Amuria</option>
    <option value="amuru">Amuru</option>
    <option value="apac">Apac</option>
    <option value="arua">Arua</option>
    <option value="budaka">Budaka</option>
    <option value="bududa">Bududa</option>
    <option value="bugiri">Bugiri</option>
    <option value="bugweri">Bugweri</option>
    <option value="buhweju">Buhweju</option>
    <option value="buikwe">Buikwe</option>
    <option value="bukedea">Bukedea</option>
    <option value="bukomansimbi">Bukomansimbi</option>
    <option value="bukwa">Bukwa</option>
    <option value="bulambuli">Bulambuli</option>
    <option value="buliisa">Buliisa</option>
    <option value="bundibugyo">Bundibugyo</option>
    <option value="bushenyi">Bushenyi</option>
    <option value="busia">Busia</option>
    <option value="butaleja">Butaleja</option>
    <option value="butambala">Butambala</option>
    <option value="butebo">Butebo</option>
    <option value="buvuma">Buvuma</option>
    <option value="buyende">Buyende</option>
    <option value="dokolo">Dokolo</option>
    <option value="gomba">Gomba</option>
    <option value="gulu">Gulu</option>
    <option value="hoima">Hoima</option>
    <option value="ibanda">Ibanda</option>
    <option value="iganga">Iganga</option>
    <option value="isingiro">Isingiro</option>
    <option value="jinja">Jinja</option>
    <option value="kaabong">Kaabong</option>
    <option value="kabale">Kabale</option>
    <option value="kabarole">Kabarole</option>
    <option value="kaberamaido">Kaberamaido</option>
    <option value="kagadi">Kagadi</option>
    <option value="kakumiro">Kakumiro</option>
    <option value="kalangala">Kalangala</option>
    <option value="kaliro">Kaliro</option>
    <option value="kalungu">Kalungu</option>
    <option value="kampala">Kampala</option>
    <option value="kamuli">Kamuli</option>
    <option value="kamwenge">Kamwenge</option>
    <option value="kanungu">Kanungu</option>
    <option value="kapchorwa">Kapchorwa</option>
    <option value="kapelebyong">Kapelebyong</option>
    <option value="karenga">Karenga</option>
    <option value="kasanda">Kasanda</option>
    <option value="kasese">Kasese</option>
    <option value="katakwi">Katakwi</option>
    <option value="kayunga">Kayunga</option>
    <option value="kazo">Kazo</option>
    <option value="kibaale">Kibaale</option>
    <option value="kiboga">Kiboga</option>
    <option value="kibuku">Kibuku</option>
    <option value="kigezi">Kigezi</option>
    <option value="kiruhura">Kiruhura</option>
    <option value="kiryandongo">Kiryandongo</option>
    <option value="kisoro">Kisoro</option>
    <option value="kitagwenda">Kitagwenda</option>
    <option value="kitgum">Kitgum</option>
    <option value="koboko">Koboko</option>
    <option value="kole">Kole</option>
    <option value="kotido">Kotido</option>
    <option value="kumi">Kumi</option>
    <option value="kwania">Kwania</option>
    <option value="kween">Kween</option>
    <option value="kyankwanzi">Kyankwanzi</option>
    <option value="kyegegwa">Kyegegwa</option>
    <option value="kyenjojo">Kyenjojo</option>
    <option value="kyotera">Kyotera</option>
    <option value="lamwo">Lamwo</option>
    <option value="lira">Lira</option>
    <option value="luuka">Luuka</option>
    <option value="lwengo">Lwengo</option>
    <option value="lyantonde">Lyantonde</option>
    <option value="manafwa">Manafwa</option>
    <option value="maracha">Maracha</option>
    <option value="masaka">Masaka</option>
    <option value="masindi">Masindi</option>
    <option value="mayuge">Mayuge</option>
    <option value="mbale">Mbale</option>
    <option value="mitooma">Mitooma</option>
    <option value="mityana">Mityana</option>
    <option value="moroto">Moroto</option>
    <option value="moyo">Moyo</option>
    <option value="mpigi">Mpigi</option>
    <option value="mubende">Mubende</option>
    <option value="mukono">Mukono</option>
    <option value="nakapiripirit">Nakapiripirit</option>
    <option value="nakaseke">Nakaseke</option>
    <option value="nakasongola">Nakasongola</option>
    <option value="namayingo">Namayingo</option>
    <option value="namisindwa">Namisindwa</option>
    <option value="namutumba">Namutumba</option>
    <option value="napak">Napak</option>
    <option value="nebbi">Nebbi</option>
    <option value="ngora">Ngora</option>
    <option value="ntoroko">Ntoroko</option>
    <option value="ntungamo">Ntungamo</option>
    <option value="nwoya">Nwoya</option>
    <option value="obongi">Obongi</option>
    <option value="omoro">Omoro</option>
    <option value="otuke">Otuke</option>
    <option value="oyam">Oyam</option>
    <option value="pader">Pader</option>
    <option value="pallisa">Pallisa</option>
    <option value="rakai">Rakai</option>
    <option value="rubanda">Rubanda</option>
    <option value="rubirizi">Rubirizi</option>
    <option value="rukiga">Rukiga</option>
    <option value="rukungiri">Rukungiri</option>
    <option value="sembabule">Sembabule</option>
    <option value="serere">Serere</option>
    <option value="sheema">Sheema</option>
    <option value="sironko">Sironko</option>
    <option value="soroti">Soroti</option>
    <option value="tororo">Tororo</option>
    <option value="wakiso">Wakiso</option>
    <option value="yumbe">Yumbe</option>
    <option value="zombo">Zombo</option>
  </select>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="e.g., +256 123 456 789"
              value={personalInfo.phone}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="e.g., patient@example.com"
              value={personalInfo.email}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
            />
          </div>

          
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfo;