import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function Example() {
  return (
    <IonCard>
      <img alt="Grass" src="https://imgs.search.brave.com/x14i4dw_lV1diTeiB9ZElatQsaVGHWlPbVizdH5PrOY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzM1NjM5MDYwOTEt/ZmRmZGZmYzNlM2M0/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/UmhjbXNsTWpCbmNt/VmxibnhsYm53d2ZI/d3dmSHg4TUE9PQ" />
      <IonCardHeader>
        <IonCardTitle>IT35</IonCardTitle>
        <IonCardSubtitle>My Ionic Application</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
}
export default Example;