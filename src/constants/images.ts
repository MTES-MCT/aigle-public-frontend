import type { ImageSources } from '../components/Blocks';

import aigleLuccaPng from '@/assets/visuels/aigle-lucca.png';
import aigleLuccaWebp from '@/assets/visuels/aigle-lucca.webp';
import avatarEluPng from '@/assets/visuels/avatar-elu.png';
import avatarEluePng from '@/assets/visuels/avatar-elue.png';
import avatarGendarmePng from '@/assets/visuels/avatar-gendarme.png';
import avatarPolicierPng from '@/assets/visuels/avatar-policier.png';
import betagouvPng from '@/assets/visuels/betagouv-rectangle.png';
import betagouvWebp from '@/assets/visuels/betagouv-rectangle.webp';
import captureFicheObjetJpg from '@/assets/visuels/capture-fiche-objet.jpg';
import captureFicheObjetWebp from '@/assets/visuels/capture-fiche-objet.webp';
import captureFiltresJpg from '@/assets/visuels/capture-filtres.jpg';
import captureFiltresWebp from '@/assets/visuels/capture-filtres.webp';
import captureHistoriqueJpg from '@/assets/visuels/capture-historique.jpg';
import captureHistoriqueWebp from '@/assets/visuels/capture-historique.webp';
import captureStatutsControleJpg from '@/assets/visuels/capture-statuts-controle.jpg';
import captureStatutsControleWebp from '@/assets/visuels/capture-statuts-controle.webp';
import illustrationAProposSvg from '@/assets/visuels/illustration-a-propos.svg';
import illustrationCollectivitesSvg from '@/assets/visuels/illustration-collectivites.svg';
import illustrationEtatSvg from '@/assets/visuels/illustration-etat.svg';
import localisationPng from '@/assets/visuels/localisation-titre.png';
import localisationWebp from '@/assets/visuels/localisation-titre.webp';
import luccaLogoPng from '@/assets/visuels/lucca-logo.png';
import luccaLogoWebp from '@/assets/visuels/lucca-logo.webp';
import mockupsPng from '@/assets/visuels/mockups.png';
import mockupsWebp from '@/assets/visuels/mockups.webp';
import partenairesPng from '@/assets/visuels/partenaires.png';
import partenairesWebp from '@/assets/visuels/partenaires.webp';

export { default as AIGLE_LOGO_SVG } from '@/assets/visuels/aigle-logo.svg';
export { default as AIGLE_NOM_SVG } from '@/assets/visuels/aigle-nom.svg';

/** Illustrations sans fond des bannières (à droite du titre). */
export const ILLUSTRATIONS = {
    collectivites: { url: illustrationCollectivitesSvg, width: 1255, height: 600 },
    etat: { url: illustrationEtatSvg, width: 1260, height: 600 },
    aPropos: { url: illustrationAProposSvg, width: 1500, height: 1000 },
};

export const AVATARS = {
    policier: avatarPolicierPng,
    gendarme: avatarGendarmePng,
    elu: avatarEluPng,
    elue: avatarEluePng,
};

export const IMAGES = {
    captureStatutsControle: {
        webp: captureStatutsControleWebp,
        fallback: captureStatutsControleJpg,
        width: 1200,
        height: 408,
    },
    captureFicheObjet: { webp: captureFicheObjetWebp, fallback: captureFicheObjetJpg, width: 1200, height: 783 },
    captureFiltres: { webp: captureFiltresWebp, fallback: captureFiltresJpg, width: 1200, height: 475 },
    captureHistorique: { webp: captureHistoriqueWebp, fallback: captureHistoriqueJpg, width: 1200, height: 776 },
    mockups: { webp: mockupsWebp, fallback: mockupsPng, width: 1200, height: 735 },
    aigleLucca: { webp: aigleLuccaWebp, fallback: aigleLuccaPng, width: 900, height: 900 },
    betagouv: { webp: betagouvWebp, fallback: betagouvPng, width: 600, height: 327 },
    localisation: { webp: localisationWebp, fallback: localisationPng, width: 1078, height: 1100 },
    luccaLogo: { webp: luccaLogoWebp, fallback: luccaLogoPng, width: 700, height: 204 },
    partenaires: { webp: partenairesWebp, fallback: partenairesPng, width: 800, height: 659 },
} satisfies Record<string, ImageSources>;
