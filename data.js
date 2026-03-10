var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-view",
      "name": "FRONT VIEW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07643810020730868,
          "pitch": 0.05281798501904866,
          "rotation": 0,
          "target": "1-gf-entry"
        },
        {
          "yaw": 0.18399547560378338,
          "pitch": -0.037349145981078635,
          "rotation": 1.5707963267948966,
          "target": "10-ff-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-gf-entry",
      "name": "GF ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.18935775786701825,
        "pitch": 0.00871437215122306,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -0.500276868132671,
          "pitch": 0.08738576112425633,
          "rotation": 10.995574287564278,
          "target": "2-pharmacy-counter"
        },
        {
          "yaw": 0.08469913228441506,
          "pitch": 0.28168163578530425,
          "rotation": 0,
          "target": "4-reception"
        },
        {
          "yaw": 0.7789063540339125,
          "pitch": 0.07673705820042898,
          "rotation": 1.5707963267948966,
          "target": "5-sample-collection-room"
        },
        {
          "yaw": 3.0744966365281865,
          "pitch": 0.07592298377808859,
          "rotation": 0,
          "target": "0-front-view"
        },
        {
          "yaw": 3.0744966365281865,
          "pitch": 0.07592298377808859,
          "rotation": 0,
          "target": "0-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pharmacy-counter",
      "name": "PHARMACY COUNTER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3803789994075686,
        "pitch": -0.005508137899376209,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": 2.161013985828588,
          "pitch": 0.2644849624518102,
          "rotation": 0,
          "target": "1-gf-entry"
        },
        {
          "yaw": 0.9021369638990109,
          "pitch": 0.10332272203156201,
          "rotation": 0,
          "target": "5-sample-collection-room"
        },
        {
          "yaw": 0.7394929450456811,
          "pitch": 0.39190436990474886,
          "rotation": 4.71238898038469,
          "target": "4-reception"
        },
        {
          "yaw": -1.040966972279577,
          "pitch": -0.05910118951242538,
          "rotation": 4.71238898038469,
          "target": "3-pharmacy"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7571563426375114,
          "pitch": 0.03286585180108048,
          "title": "RESTROOMS",
          "text": "TOILETS&amp;STAFF CHANGING"
        }
      ]
    },
    {
      "id": "3-pharmacy",
      "name": "PHARMACY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0944883959073586,
          "pitch": 0.19099089457564666,
          "rotation": 0,
          "target": "2-pharmacy-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-reception",
      "name": "RECEPTION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8893140281055292,
        "pitch": -0.001975743669282437,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": 0.2695961184436513,
          "pitch": 0.2742267660871409,
          "rotation": 0,
          "target": "1-gf-entry"
        },
        {
          "yaw": 0.9246046359473095,
          "pitch": 0.20666693753618048,
          "rotation": 0,
          "target": "2-pharmacy-counter"
        },
        {
          "yaw": 1.3669608710181684,
          "pitch": 0.1581977886912842,
          "rotation": 0,
          "target": "3-pharmacy"
        },
        {
          "yaw": 2.9010521269216447,
          "pitch": 0.23991865701575676,
          "rotation": 0,
          "target": "6-gf-corridor"
        },
        {
          "yaw": -1.1722809288678526,
          "pitch": 0.3772443540929231,
          "rotation": 5.497787143782138,
          "target": "5-sample-collection-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sample-collection-room",
      "name": "SAMPLE COLLECTION ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.764935505097931,
          "pitch": 0.29438159794791297,
          "rotation": 0,
          "target": "4-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-gf-corridor",
      "name": "GF CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.6263410989333025,
        "pitch": -0.026861183648735576,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": 2.990296279767465,
          "pitch": 0.36729034699658136,
          "rotation": 0,
          "target": "7-consultation-1"
        },
        {
          "yaw": 1.8135214359813183,
          "pitch": 0.5898758433895175,
          "rotation": 0,
          "target": "8-gf-procedure-room"
        },
        {
          "yaw": 0.669612390360129,
          "pitch": 0.4064054242669606,
          "rotation": 6.283185307179586,
          "target": "9-consultation-2"
        },
        {
          "yaw": -1.7425667220687941,
          "pitch": 0.3814721196304536,
          "rotation": 0,
          "target": "4-reception"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07807318944958652,
          "pitch": 0.12912781271365326,
          "title": "RESTROOMS",
          "text": "TOILETS&amp;STAFF CHANGING"
        }
      ]
    },
    {
      "id": "7-consultation-1",
      "name": "CONSULTATION 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.49248460490428414,
        "pitch": -0.004904937924779418,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -2.2777467316728846,
          "pitch": 0.0039056063771631955,
          "rotation": 4.71238898038469,
          "target": "6-gf-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-gf-procedure-room",
      "name": "GF PROCEDURE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8740614792737338,
          "pitch": 0.16903448020682,
          "rotation": 0,
          "target": "6-gf-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-consultation-2",
      "name": "CONSULTATION 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -1.6258764525949694,
          "pitch": 0.17435130967214718,
          "rotation": 0,
          "target": "6-gf-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ff-lounge",
      "name": "FF LOUNGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6039970486144774,
          "pitch": 0.054426311760449764,
          "rotation": 4.71238898038469,
          "target": "0-front-view"
        },
        {
          "yaw": 2.978796051172254,
          "pitch": 0.06361580667161348,
          "rotation": 0,
          "target": "19-staff-pantry"
        },
        {
          "yaw": 0.07860558594662237,
          "pitch": 0.05695155503575933,
          "rotation": 0,
          "target": "11-ff-courtyard-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ff-courtyard-",
      "name": "FF COURTYARD ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1555731199915744,
          "pitch": 0.33156534525707926,
          "rotation": 1.5707963267948966,
          "target": "17-ff-changing-room"
        },
        {
          "yaw": -2.9697473167244066,
          "pitch": 0.29295407669462925,
          "rotation": 0,
          "target": "16-saloon"
        },
        {
          "yaw": 0.9371806419302047,
          "pitch": 0.11557521737926457,
          "rotation": 10.995574287564278,
          "target": "12-ff-corridor"
        },
        {
          "yaw": -0.5510650362294598,
          "pitch": 0.38331679872661795,
          "rotation": 4.71238898038469,
          "target": "15-call-centre"
        },
        {
          "yaw": -0.34757860730334045,
          "pitch": 0.24767876552812496,
          "rotation": 4.71238898038469,
          "target": "14-office"
        },
        {
          "yaw": -0.05216871251061406,
          "pitch": 0.13435993069159125,
          "rotation": 0,
          "target": "10-ff-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.953590688544418,
          "pitch": 0.24477270618840663,
          "title": "CHANGING ROOM",
          "text": "<br>"
        },
        {
          "yaw": 1.5417766724625777,
          "pitch": 0.13375814071505943,
          "title": "TOILETS",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "12-ff-corridor",
      "name": "FF CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": 0.08631653307227793,
          "pitch": 0.1437729643678729,
          "rotation": 7.853981633974483,
          "target": "23-ht-room-1"
        },
        {
          "yaw": 0.7744464194718006,
          "pitch": 0.2436516650602929,
          "rotation": 1.5707963267948966,
          "target": "18-ff-consultation-3"
        },
        {
          "yaw": -3.0593525780210857,
          "pitch": 0.11128126496319624,
          "rotation": 0,
          "target": "17-ff-changing-room"
        },
        {
          "yaw": 0.03653631346099928,
          "pitch": -0.03033406455515042,
          "rotation": 1.5707963267948966,
          "target": "24-ht-room-2"
        },
        {
          "yaw": -0.06719519893308501,
          "pitch": 0.07626394178824825,
          "rotation": 0,
          "target": "13-ff-waiting-area"
        },
        {
          "yaw": -2.3671504405229165,
          "pitch": 0.3798209427451482,
          "rotation": 6.283185307179586,
          "target": "11-ff-courtyard-"
        },
        {
          "yaw": -1.7317862685313763,
          "pitch": 0.08513667363710908,
          "rotation": 0,
          "target": "14-office"
        },
        {
          "yaw": -1.9707360018270812,
          "pitch": 0.0764908185002362,
          "rotation": 0,
          "target": "15-call-centre"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.811464528828071,
          "pitch": 0.12264839410413941,
          "title": "TOILETS",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "13-ff-waiting-area",
      "name": "FF WAITING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6241246541553593,
        "pitch": -0.01975981386157244,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -2.463218222184331,
          "pitch": 0.2307164364346832,
          "rotation": 4.71238898038469,
          "target": "19-staff-pantry"
        },
        {
          "yaw": -1.2998244960258791,
          "pitch": 0.3754720124311106,
          "rotation": 0,
          "target": "20-ff-procedure-room"
        },
        {
          "yaw": -0.9095208952059899,
          "pitch": 0.3189074264023368,
          "rotation": 0,
          "target": "21-ht-room-4"
        },
        {
          "yaw": 0.8430747501313505,
          "pitch": 0.22197949774830406,
          "rotation": 4.71238898038469,
          "target": "22-ht-room-3"
        },
        {
          "yaw": 1.2653936933302017,
          "pitch": 0.35218057845709794,
          "rotation": 0.7853981633974483,
          "target": "12-ff-corridor"
        },
        {
          "yaw": 1.2669649957230167,
          "pitch": 0.13036084504402368,
          "rotation": 4.71238898038469,
          "target": "24-ht-room-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-office",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5199488386168554,
          "pitch": 0.24507668675470384,
          "rotation": 0,
          "target": "11-ff-courtyard-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-call-centre",
      "name": "CALL CENTRE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.31921982201869,
          "pitch": 0.1169510125523523,
          "rotation": 7.0685834705770345,
          "target": "11-ff-courtyard-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-saloon",
      "name": "SALOON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.109212043732513,
          "pitch": 0.26277691231321043,
          "rotation": 0,
          "target": "11-ff-courtyard-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-ff-changing-room",
      "name": "FF CHANGING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7694063538087335,
        "pitch": 0.014890629388403909,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": -3.1103711551441044,
          "pitch": 0.10305525985415898,
          "rotation": 0,
          "target": "11-ff-courtyard-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-ff-consultation-3",
      "name": "FF CONSULTATION 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2683420715698333,
          "pitch": 0.2168980516155603,
          "rotation": 4.71238898038469,
          "target": "12-ff-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-staff-pantry",
      "name": "STAFF PANTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.365775040875276,
        "pitch": 0.10606763638950767,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": 2.5324339967405676,
          "pitch": 0.10578976937200402,
          "rotation": 0,
          "target": "10-ff-lounge"
        },
        {
          "yaw": 1.0587621854408127,
          "pitch": 0.19129229761141175,
          "rotation": 0,
          "target": "13-ff-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-ff-procedure-room",
      "name": "FF PROCEDURE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8963841516942752,
          "pitch": 0.18435890674801492,
          "rotation": 1.5707963267948966,
          "target": "13-ff-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ht-room-4",
      "name": "HT ROOM 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7472663299053188,
          "pitch": 0.1816645169022557,
          "rotation": 0,
          "target": "13-ff-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-ht-room-3",
      "name": "HT ROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9488159726110084,
          "pitch": 0.36377806025260284,
          "rotation": 0,
          "target": "13-ff-waiting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-ht-room-1",
      "name": "HT ROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7704872408023888,
          "pitch": 0.2990343119648706,
          "rotation": 0,
          "target": "12-ff-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-ht-room-2",
      "name": "HT ROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8496505947292867,
          "pitch": 0.23291948566535758,
          "rotation": 0,
          "target": "12-ff-corridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CUTIS CHENNAI",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
