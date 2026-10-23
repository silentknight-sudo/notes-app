// "drive" loads photos from the shared Google Drive folder; "local" lets the viewer pick photos from their device;
// "assets" shows the photos listed in window.ALBUM_PHOTOS ({ name, url }), e.g. copies uploaded alongside the page.
const SOURCE = window.ALBUM_SOURCE || "drive";

// Photos in the shared Google Drive folder (duplicate "(1)" copies left out).
const DRIVE_PHOTOS = [
  { id: "1xFqsptAp2Z-IUJO9Vt27SJ-ppVoF-5e4", name: "_S1A5826" },
  { id: "1k6Nub2aKVbQqxcBZ7jHTEY6OKICdRlyQ", name: "_S1A5827" },
  { id: "1SFm0zRljzuDNsdVjxYY57qFvmNOulyik", name: "_S1A5828" },
  { id: "1nDc0hZKnUMlgPCWSGUU-UZjhJYnF1afb", name: "_S1A5841" },
  { id: "1h_BkjiXYjkczrvf8egwvrW1LX3ZI5xAI", name: "_S1A5844" },
  { id: "1oeIVrYk9XZMj0koyFhHN2QAEjiAGKHbO", name: "_S1A5846" },
  { id: "1l9UNpAV2ahqlAlZw5Sm51llh-5xwXHZY", name: "_S1A5848" },
  { id: "14qTZbrqn78GOOvCniDOY3-aLwEdebe9_", name: "_S1A5849" },
  { id: "1Li3I2Nlfw8XvHo-JLzR3REE1iy5NIUWI", name: "_S1A5850" },
  { id: "19WSvc5_wkoUlZhIffRTqRmqHEdG-P-dP", name: "_S1A5851" },
  { id: "1hFA5OF-6d6tvMS4PNAwOol7YB2sbACG4", name: "_S1A5853" },
  { id: "1yD8pzecZvSG5Z78onTg2zp-Ob7L7bEVC", name: "_S1A5855" },
  { id: "1wVP2Wl_K5ssLiNGW44RctfSH1mEMDtX4", name: "_S1A5857" },
  { id: "10TVxKWf_cwoB2v_Ef5vKZL-CB1O3Ocf5", name: "_S1A5859" },
  { id: "1xHMiDf75xLNcPXhDbKd9Ztfl8xhhTA7F", name: "_S1A5860" },
  { id: "1TpeeFoTJQZxdS2BvPHYSJ9mTKvPTDUg5", name: "_S1A5863" },
  { id: "1quxxKLCJeIzykN8ocXhiQhhV6NVyzWiW", name: "_S1A5864" },
  { id: "1EufGWOliR4J55HTIdW8SRJRoGMKpkQ5K", name: "_S1A5865" },
  { id: "1w8FEUpZQgkOxoOaPwNzUQJH2yJrMD2Ii", name: "_S1A5866" },
  { id: "1ggXZ1aIp4EAI882V-d2PeFewKmdpHsHx", name: "_S1A5867" },
  { id: "1XaK7XL1Ij1hPQxImV2ayAXlMCH--xNNI", name: "_S1A5868" },
  { id: "1Q7fBTrCOlFLP61YxPBuRd8CnAnqdKYhV", name: "_S1A5869" },
  { id: "18SNjXVJr7UIir4bZDFjG1--6K7PzHpDB", name: "_S1A5870" },
  { id: "14omtGtOa1L0QKy-3ky1NmumKv5HxdNCU", name: "_S1A5871" },
  { id: "1BYVkCho0vGZjIeg7wA1hdbMGHQ_mGhAS", name: "_S1A5872" },
  { id: "1vohpl30uFIFA7UbcZ0D2HweMHH62Px6k", name: "_S1A5873" },
  { id: "1o_dXUU8GY7QQIBGMyY1R2vRJVUf3Vl64", name: "_S1A5874" },
  { id: "1H5aYFcLP-QpxBvtCiJJdLfmmKkHaxP0f", name: "_S1A5875" },
  { id: "1rg6EDY9jNGsUEGymV9U2-HC09MrWUWoW", name: "_S1A5876" },
  { id: "1rYjkKHp6p7qIvOXaVnlCIHBFxC1l7U4-", name: "_S1A5877" },
  { id: "1jwFYvAhkm-aWscdqZg9xEf3aP28hT0oh", name: "_S1A5879" },
  { id: "134XmfWy-O3pufLI50SHuBVQAkzUBfZLp", name: "_S1A5880" },
  { id: "1C6nLV_FYsx326kBqg1KzxQ7cI7fppE-s", name: "_S1A5881" },
  { id: "1mRnxPHB2Zs8eu4IReHtFql0Dn4DMcm8T", name: "_S1A5882" },
  { id: "1epeBAM6FaPW2LVHMcavazkDuWiHk-3Tz", name: "_S1A5887" },
  { id: "14t8Mg1wOXeroSS289m0xz3lGI-1R6D22", name: "_S1A5888" },
  { id: "14KmiW9T8YptXw_E0Vfb2pjjO5SzvInCa", name: "_S1A5889" },
  { id: "11JGKCRic2UF3iLzgCBrOnHOo2S1xA4U8", name: "_S1A5890" },
  { id: "1VLORdGSzPQmlMeFpLXPzXyuo6vXUYVho", name: "_S1A5891" },
  { id: "1bzYq_vEJ9qFUPpsdI0kOpsFAlmyCS2M8", name: "_S1A5892" },
  { id: "1UYR8WA5tQoVW-aJeFUFOnDbUnM6ddGsY", name: "_S1A5893" },
  { id: "1nrOnQsTYWvC0n1My7wyAa32xKXcI_TG1", name: "_S1A5894" },
  { id: "1-j7mkrLtM4UTTITjJwfRV6wZotWkIOfK", name: "_S1A5895" },
  { id: "1crG_4YAS_9vgadwle86sfz5nvMLyisH3", name: "_S1A5896" },
  { id: "1QorFSue_0DFyzXuZINJjavYhdYS_QRhl", name: "_S1A5897" },
  { id: "1QkZIckIJTnEsjqnnAnRQq95yOlXd7ZqX", name: "_S1A5898" },
  { id: "11fA8tHtCQS0Dy0jzYVzTUM5nONWv8BRw", name: "_S1A5899" },
  { id: "1SaVoXgWPPcJDT8HBd1snsT2nRmat0vcZ", name: "_S1A5900" },
  { id: "1CUGJFkUQXoqBzMdQCk5q5VG0dmLFgTBC", name: "_S1A5901" },
  { id: "1Xg55j3s48P4UqWMlbGoxsAzuVwvg_HE4", name: "_S1A5902" },
  { id: "1qmBPOqpAo9ES0qoWSGnJA-stN2IJg5PV", name: "_S1A5903" },
  { id: "1t-fbuqJfbT9XL5trfZJVmoA5zcaIZdY-", name: "_S1A5904" },
  { id: "1R2s6G3tYcecVx97uTm6kXWm6lBEMbaTK", name: "_S1A5905" },
  { id: "1lW09OA95PFdqaAJK2jNZAStDjcaBk7RZ", name: "_S1A5906" },
  { id: "1QPNniM5fjU-LtSeksG4fKdHEgOBM7DjA", name: "_S1A5908" },
  { id: "10uvKyYtwB5YG3YpGcKiiXbI1hbrBv3Gh", name: "_S1A5909" },
  { id: "1EKOsBEhr1jNfosVVGu4XaNyBzVKVYkNL", name: "_S1A5910" },
  { id: "1EgfcO-kGMi184vrpvdz5Gz7BXHbER5Zi", name: "_S1A5911" },
  { id: "1NvdiVE3p-I5PnPPqU1AuxfXY31WKD4Ui", name: "_S1A5912" },
  { id: "1SdDE7dI_pQMfHfJN_7OEvoF8f9CJwCdE", name: "_S1A5913" },
  { id: "1LfCSHd0lxL_Wi_A3-PU251-Xr3OSEib2", name: "_S1A5914" },
  { id: "1umYkf6rBdTV6CtolNYibRCN0plerp-lr", name: "_S1A5915" },
  { id: "1GTJhQOwCgwvFrZaOIijqeMVD-JShuyV7", name: "_S1A5916" },
  { id: "1XwzDeXzuPL0RFV5evyPxUeE62n5PQ56K", name: "_S1A5917" },
  { id: "1ftz4HWyM-vYiqB4PKssx3Y2m4ZPaVLu8", name: "_S1A5918" },
  { id: "1L04djpa0idsQ-fYW9iyJnuMCHZ0ws8tQ", name: "_S1A5919" },
  { id: "1Oud9eXVTq_FMINKTRg10LLpEESHCmJAi", name: "_S1A5920" },
  { id: "1C8AAyuNaUpX_WmoKq1jiK6K-0rFDZGyc", name: "_S1A5921" },
  { id: "1cNWjiZvTXmwUCAIrAKhZbqRXDOH2dIRS", name: "_S1A5924" },
  { id: "1CBM1wgNqQcOs85Iohwwf0Kjz9NqR2qTh", name: "_S1A5925" },
  { id: "1wK5DU68zPw55-iFeFjDt1_iSEqo_qFTW", name: "_S1A5926" },
  { id: "1plu_88yivRi-AMaeSaJIzcPqT12CREkn", name: "_S1A5927" },
  { id: "1xF67PLQBzT-m9gI_U1Wr1TFj6eZuLTdV", name: "_S1A5928" },
  { id: "1JyccsEdjX2U9JcpLJfVheKUxKkIcVLSM", name: "_S1A5929" },
  { id: "1OS0fKqwObgKxjuMvscNBkEyZhz2olYmN", name: "_S1A5930" },
  { id: "1piHHcFuDC7n4u2Zp0U7wnO_8kXxWO98v", name: "_S1A5931" },
  { id: "1Z_c86qTrcBamiqBNAlcOOOlShj8fuW7f", name: "_S1A5932" },
  { id: "10PvBRL6OgAaQWSKeaG1VnkZr-e8ObpGj", name: "_S1A5933" },
  { id: "1biFeavwip1idLLrZBwrYDz2hB5eu5_h9", name: "_S1A5934" },
  { id: "1RZdgEfpa73fP2z0tBx60IjjAsmgldMwu", name: "_S1A5935" },
  { id: "10A68U-Ir1WKjd78cuiwVPVoFU-5oZyN-", name: "_S1A5936" },
  { id: "1DbgBJYJiLHNtcruAXYTGepNYtLKNGmHA", name: "_S1A5937" },
  { id: "1YRDulMIpgKlLJPT110EGjIcX3znC_DJ9", name: "_S1A5938" },
  { id: "19ZInnuJVoQUsgWdBdXZHRsOSHhuG_omL", name: "_S1A5939" },
  { id: "1-Pnq766JmKDIowdC62dLOyrYUFM1qNU4", name: "_S1A5940" },
  { id: "1OLJ1XjkhD0zAfn6GSME1MWi-dldXFdBH", name: "_S1A5941" },
  { id: "1lV-Ho2NPkcIMynB9FW9O21hHQgA88AUo", name: "_S1A5942" },
  { id: "1YdBfefy7muJL6_ignMWqCtF-e1JATjMQ", name: "_S1A5943" },
  { id: "1myVrRSWDPV6Zo-4Zf_jhJH4T8CfYmqw5", name: "_S1A5944" },
  { id: "1lpVd5-I0M77z2AUeBV6tizmB0Mqr2Ldk", name: "_S1A5945" },
  { id: "1chUJV7ZQSlUF-hODimuEz3m8ighFOiJq", name: "_S1A5946" },
  { id: "1gPBzuvX2wd9UNjHGGwRX8RRB4nhhfMob", name: "_S1A5947" },
  { id: "1pH9S89E_LNSih1pQ3G_eCA4SFI_kBUwL", name: "_S1A5949" },
  { id: "19-bhc8OiZsEtbuKhmN3q_wFadEzvUXRb", name: "_S1A5950" },
  { id: "1sF77C31d3EwMKiGmXFVpz94jluRcFxKq", name: "_S1A5952" },
  { id: "1z6EaHerukq-6mERkYpCnsj9hDLpanhBG", name: "_S1A5953" },
  { id: "19g6LL2hj4H9KNgTTtYEF3ZAWFrIBaEDr", name: "_S1A5954" },
  { id: "1gDx4uPUJOZPhIeXJB3ZDlwci5nJVMOw5", name: "_S1A5955" },
  { id: "1VjSwpqFIa-T3rhzwUFHVbqhpxwJ0TvcA", name: "_S1A5957" },
  { id: "1ZPye2G0TFxx6oMg_STJ1OW0r3k_ChpJX", name: "_S1A5958" },
  { id: "1it7AzAXV5FmHIhuhvhOehdRlY6iulx-T", name: "_S1A5959" },
  { id: "1zvpz1dd25p8WKrgeaAqna9IpqS70aTEt", name: "_S1A5960" },
  { id: "1losyuB2nGZvTN5iTY7n-bUqSm4CHY1e4", name: "_S1A5961" },
  { id: "1hf0kCdwaPeCcdwz1liakA8u6BrNYKDb8", name: "_S1A5962" },
  { id: "17BNyyqU7vLldQs1nOKU5ygbhIC0R3zWm", name: "_S1A5963" },
  { id: "1hGYLvV9gK14XEdZrv6xcFSLqf8LUCGqj", name: "_S1A5964" },
  { id: "1i4E3TDco3epAVzR22CkCY46KA3o5qfUs", name: "_S1A5965" },
  { id: "1LodNQhF7B6bVpvjx-0T1lxj2sIxEyZH3", name: "_S1A5966" },
  { id: "1J5TP6DZ78veMJwQUbGYhTgoMMK_mmkkY", name: "_S1A5967" },
  { id: "1ELzpB4pAaWn8sI_4bXlsaR63woeKRMMw", name: "_S1A5969" },
  { id: "19VyuNRC8c_TsSfcPsBnIEvlqlN-WHp82", name: "_S1A5970" },
  { id: "1A7SItXddCZfu2GunRg7Oc75S_DQLz8_P", name: "_S1A5971" },
  { id: "1nlp6GKpfreTQZWvPI2F7ZkelKZvZmKOr", name: "_S1A5972" },
  { id: "1JZbOsSSz1rzNw9uF1398yYme-4IKERZL", name: "_S1A5973" },
  { id: "11vDcQkV3ZOkBCwFNelgh_JIi-_i5K1dD", name: "_S1A5974" },
  { id: "1bV34nNjg3UQArpjB0w8DUUmsUoYcMJ_5", name: "_S1A5975" },
  { id: "1eUZBvnNDUTTzH_EGSYo_S2VIhq2mStGZ", name: "_S1A5976" },
  { id: "1xiMLKTxFn2PdK43BWHlhAxRMjOLJB4hT", name: "_S1A5977" },
  { id: "1QceomnLKJBCrXNDBzg6-KNgX1FD0eIQW", name: "_S1A5978" },
  { id: "1LCQpB_8EJZEO1YRa58MbM2ciZ6Pn10G6", name: "_S1A5979" },
  { id: "12ESdtaM41_oWoNOsCN3c_x1PRcxTvg1f", name: "_S1A5980" },
  { id: "1wQNr4z5mAoGapAM8b2DkDG2LcdkghUlV", name: "_S1A5981" },
  { id: "15ZuFUmgbX1h6yZEHWYtO9NyVJ1F6AC-n", name: "_S1A5982" },
  { id: "1cSShpuPxxLzHxpNzn59Ot3q5CCKL_xz9", name: "_S1A5983" },
  { id: "1oo59A-_v7Yx9lurliKXJ5K1vS_Xr_6Au", name: "_S1A5984" },
  { id: "1hsQGPJ_M8kwmLAZBUDVzwCZP2dXivgP5", name: "_S1A5985" },
  { id: "1PZT5auxT7E3vhS-XziPazmQIACBYUAom", name: "_S1A5986" },
  { id: "1qxAJrYLnRPMbGVEHL3GJ0gpJ-IVYcf3T", name: "_S1A5987" },
  { id: "1wE9PG_e3kZ07tzKj_l-I9HCdF7udpR3-", name: "_S1A5988" },
  { id: "1LNzvWODfUR-_tMtlMEnQlVloNhSXjpwx", name: "_S1A5989" },
  { id: "1S8W1ZdU_1V60uF60YlAFgEmbtkHQjm5L", name: "_S1A5990" },
  { id: "1HtHZ_qKIhSWhlubBXMHFx0bI1uyFU1fU", name: "_S1A5991" },
  { id: "15mFrZvr27Km2gFE6q86KGXec6j0Fo0bF", name: "_S1A5992" },
  { id: "1Iuuf0iRGqkX02WGRtoGk3WOcspdJbkCM", name: "_S1A5993" },
  { id: "1W1UOESdcBwuEjNo-FJBHrpLTkoNwg-uQ", name: "_S1A5994" },
  { id: "1yqJR_uHg0FmOfu40yVpwJKU_d9xkHTfP", name: "_S1A5995" },
  { id: "18JEVrQoP9C5cRjyPiSHDPsb8knrFWWB2", name: "_S1A5996" },
  { id: "1uLiTHcPUNz0GfTITCymbbcZi73QEfEoF", name: "_S1A5997" },
  { id: "1zlCM58VzRcYvFLNtfe8dkGhlShkgZjLp", name: "_S1A5998" },
  { id: "1Hzyx1jdqb340bAhmQbWUqcz-0Bh0Zaz2", name: "_S1A5999" },
  { id: "1Mf5xNdyU0yGYhYpFBXw-Isj5kS41T8xb", name: "_S1A6000" },
  { id: "1DgmBtgPB2zKGCDxcimmXxeZrNZIgaHW-", name: "_S1A6001" },
  { id: "1NI7L1wQvNJy_NHrDqegaHbOYH2Co7ohC", name: "_S1A6002" },
  { id: "1bWb7k1UPbENCHUdu3xWa-zIXOtv-GA7L", name: "_S1A6003" },
  { id: "1bi3nuEZnehxSMftLq4I-Ag21dJdwsRNq", name: "_S1A6004" },
  { id: "1npehsxlMnBEYIkNTN2P21fV3A7PS_rr1", name: "_S1A6006" },
  { id: "1360AF3bd9vhjX3Nnk1X0DAVVgjWhyMej", name: "_S1A6007" },
  { id: "1f1GtZiFK21hrxhSIKBEE23FokLhnmysu", name: "_S1A6008" },
  { id: "185cbYt1lvirIHZ6aDZzrTkb_ce0j1sQ9", name: "_S1A6009" },
  { id: "1Wn3jd8wxidYdCKkRpnFwm_Ku665GvAhR", name: "_S1A6010" },
  { id: "13njGnteqCN43jfKTDYEY8MqsBl-3rAbM", name: "_S1A6011" },
  { id: "1J76naZ8_qvEnSyjbyhInDz-GctYUfAJQ", name: "_S1A6012" },
  { id: "1xX8TV-tj5tBke0YVmjRwrhPAosqUOJSc", name: "_S1A6013" },
  { id: "1dv906Kgz7ZGGUlUH_8HK043XdoZ37zzX", name: "_S1A6014" },
  { id: "1Tjl9-3vlppk934DmqrEC1c2zAcfmjw54", name: "_S1A6015" },
  { id: "1dSWTVAORaL5HVvJ6YpD8aYXVSoxj8XZ3", name: "_S1A6016" },
  { id: "1kGSKQKtSNbQvyL9GHaO6fHD2BYj6kB-j", name: "_S1A6017" },
  { id: "1fFJdOTbOZp5QRRQWshNjLeUPAygx9oMC", name: "_S1A6018" },
  { id: "1tPg4sYnJjvS43pWphpVzBA_ovykzUWnY", name: "_S1A6019" },
  { id: "158Bhk4VpLQgHY9eUu-TYwczF1OIaVEcC", name: "_S1A6020" },
  { id: "1nmyHOJ3va6a9YC90QCSSm7ec7Wg4y1Uq", name: "_S1A6021" },
  { id: "1_EJO3byp6l5Rg3BQ8eUhxPhZytRMHS_r", name: "_S1A6022" },
  { id: "1kTbSvGGY11NlLhSdBST61j7oDf7SulYG", name: "_S1A6023" },
  { id: "1KYI72gAqSJoB6YyZJc31lmMYmqks6eYM", name: "_S1A6024" },
  { id: "1Iv26KNRs0FMMc3Eb04_RuHF7XzWHHDfH", name: "_S1A6025" },
  { id: "11QPCRFyFDoFe8cDELeuw6hy9Emw4O5iK", name: "_S1A6026" },
  { id: "1uoj1f6-LNJwyxiGI2jQ2ULRu5vTNvQNC", name: "_S1A6027" },
  { id: "1WTx-4lrGPyfdpGUGCBGuGPZO053gOlcQ", name: "_S1A6028" },
  { id: "1tMq8OK1lqeJU_0dGE0S8vgnube05pdg9", name: "_S1A6029" },
  { id: "1Amb4028rstxGBn8lRwsBfG-ZIGI59Yt5", name: "_S1A6030" },
  { id: "1mkc63cPCzTi8acAlOY3MbsOzmzcKcKbX", name: "_S1A6031" },
  { id: "1ZAwlMajRHI5rwhFFDDy_RXSCNNw_1ldn", name: "_S1A6032" },
  { id: "19Fz-RTqa4oxo5KN2JZ1vDgyOv6U6BE2T", name: "_S1A6033" },
  { id: "1XyIUr13K2Cf8eO1cTgUHLkNHzftHwRWu", name: "_S1A6034" },
  { id: "1OgKutR2MwARhxciKJ_776KUge3uP0Q_g", name: "_S1A6035" },
  { id: "1ZEj2LMOID_JLt_UTrNUKrgt61pfZuJQS", name: "_S1A6036" },
  { id: "12Tw8bQTEHujZ6ElOrMBagvlR-jEnhvAJ", name: "_S1A6037" },
  { id: "1fgRsTPxx-x5TSCy5QfYVeckkuOia8XXo", name: "_S1A6038" },
  { id: "1X13Z2aI5rR0qEN-jW9r2WwXxWumMBzKR", name: "_S1A6042" },
  { id: "1EkYVLKIRnoHtbnx0EEZZTCktWKtfUC_r", name: "_S1A6043" },
  { id: "1YzKfd95oqgn7eB4cHzkSgFMyaxkWrWZX", name: "_S1A6044" },
  { id: "1uJ-qW0aylMMECyDkYZ-FIFGhoxrVwRAs", name: "_S1A6045" },
  { id: "1jB2oe4CokoN3RKlyuGQ0P6s0WfVjrvC2", name: "_S1A6046" },
  { id: "1kQ916b9ZL8qxQCWvvtrWD77o2rZl3re_", name: "_S1A6047" },
  { id: "1TgXdKDCt_8832XHPulzBcWnDOwWbom1E", name: "_S1A6048" },
  { id: "1eYUM0Vhrt-R8O_tOnW1GoTC-gpCnPvji", name: "_S1A6049" },
  { id: "1a5J8OcRmdbKuOKRY40u4ASyKrRs1Kzpr", name: "_S1A6050" },
  { id: "1AsypW8HYvFqsP9Kuqb9y6hA9cG3tgxMN", name: "_S1A6051" },
  { id: "1W8e-iefiebEkOw-NejIk0k-8DuS7BVIO", name: "_S1A6052" },
  { id: "15IzyvRdDThRfL1CGCC1cNW-UT1EQdeEq", name: "_S1A6053" },
  { id: "1mjBMvAzuJNyjUr95aIeLcnfKzSjIg9Kh", name: "_S1A6054" },
  { id: "1VkNdkL4J7IiFGBi5AIF5Nyybcr3x4ZZs", name: "_S1A6055" },
  { id: "1KAHZO1stxl2PIqGGdNVAMORzhORLvWMz", name: "_S1A6056" },
  { id: "17uqvKlTzW2oDgzq47VFZxJQGotJF6j1Y", name: "_S1A6057" },
  { id: "1RYNLMmIN_aPPUiG63duhcNFloOmBTypt", name: "_S1A6059" },
  { id: "1ojpqTtq_rivHT2U3akGi-vuaB2gXC0sU", name: "_S1A6060" },
  { id: "1FPuHDU9Ur8V4vlMCBMDLSfWxlK502W80", name: "_S1A6061" },
  { id: "12UgMqhDINHojNZJJKHLC1Ww4DDZX8hQO", name: "_S1A6062" },
  { id: "1ZGORtnkdVss2ObCNAEMZzK5siRg-ma3S", name: "_S1A6063" },
  { id: "13a_z_EVdCik6T48AL2fLO0K6R8-62Kls", name: "_S1A6064" },
  { id: "1pSVGPxv9Lr-pWrRfucvicxtkbsBQchDa", name: "_S1A6065" },
  { id: "1dOTUVNBIhrLsF-JummfZzimqjW2Yv4GG", name: "_S1A6066" },
  { id: "1S8suJm47vjE408v7NOhHMORNZGLlyfPV", name: "_S1A6067" },
  { id: "1Pwvlq6K1cQEBCV6Lj4cDS6EWdOKtkY-H", name: "_S1A6068" },
  { id: "1dsqejckZxzCHPDpgjqfIiV95j5E7X16Q", name: "_S1A6069" },
  { id: "1wh0MkoKt6z7dzqrNp-2VqovdGmcXGpeZ", name: "_S1A6070" },
  { id: "1fRKCIJdKnjQ-hBTolcp8P61E6NnGX5gq", name: "_S1A6071" },
  { id: "1yioHxSCPdKOjgx4NnZBf8nJbWR4a6grz", name: "_S1A6072" },
  { id: "1mJZTvzbY655xJpRaQHz2gFv2EQJGHEZb", name: "_S1A6073" },
  { id: "1eGeC03NZC9QlxiBf9GS0vEYispFz-Fea", name: "_S1A6074" },
  { id: "1CVvHlT70D1bpgvfsa3bhuLGEyysIqnit", name: "_S1A6075" },
  { id: "1GYeK7IAM0dRTpghhGItGjhbB-N9eZXlJ", name: "_S1A6076" },
  { id: "1oXLdanb6z-TDk2EqAswa3ry7NWsouVX4", name: "_S1A6077" },
  { id: "1e2YvGyz_FWzXcNlXl7z8pRtQvQjQtKPY", name: "_S1A6078" },
  { id: "1geI_BKccozBN-V7wMyYXI8sFQNj6q039", name: "_S1A6079" },
  { id: "1blPpUsh4YIOOOhgiLEj_qwysrEExmRwQ", name: "_S1A6080" },
  { id: "1grKSlLa_HZjXy1jZLpPh1ldYyKMJuOrh", name: "_S1A6081" },
  { id: "1TG6nf5A6T3d0_6311P2i2fOlRGXGSGA4", name: "_S1A6083" },
  { id: "1fO_9uKvnnZFZgMIhEnnhMkW7opbcDIhC", name: "_S1A6084" },
  { id: "1_qLwd6hyqKvKb5ZW4b1lyiXIpCE3fYRi", name: "_S1A6085" },
  { id: "1mEN6mYh3s1jvk0FnLXtVxb4WiLFFDIaq", name: "_S1A6086" },
  { id: "1k8aA4oaCndQXc2XtbAROqgPkp0_IguWR", name: "_S1A6088" },
  { id: "1Zous6sOvx8mg_8FsZnHcPA__qcJTcLu8", name: "_S1A6089" },
  { id: "1DfIuvs2YKLQtp0rpCRWbZHHKQRf1lsyH", name: "_S1A6091" },
  { id: "1lYskdb6RPa7PHRDNHjt7Q0P8FxZKbmcN", name: "_S1A6092" },
  { id: "1BBSPKO6e3s9tXT4lhmuhz3cAcHC0r-PR", name: "_S1A6093" },
  { id: "1lZjrojdQl6XiP2-_Mc6RC-_vxZziubo2", name: "_S1A6096" },
  { id: "1BH2Fejn0pJEmycgOZFX8xP0nfm11cIwE", name: "_S1A6097" },
  { id: "1sOKSZrNTo-YEcyeTiynpRMMiZJwq4DbX", name: "_S1A6099" },
  { id: "1ebBpgM1c6l3IWYUybs5tqr5iSwct9W9p", name: "_S1A6100" },
  { id: "1JAe3DfORILH_DQh-95jLZlLV4Ov4MLqi", name: "_S1A6101" },
  { id: "10CEs11B_nCZ_KYr6pSOmlM5F-MCDHPi8", name: "_S1A6102" },
  { id: "1nYFWphbi5wzcyx7gqpQRbVFIwAJiSCeH", name: "_S1A6103" },
  { id: "187qLf2vg3wLfdPU9iAKBPuWoS4Bpl4mY", name: "_S1A6104" },
  { id: "1yUnR_BLowsPTYN6iiuDKi3bVmbvMwoLD", name: "_S1A6105" },
  { id: "1CHzP0bhuTdneZiJ6WUxp1lsLdLSEzdue", name: "_S1A6106" },
  { id: "1AhjmLVrlVzWyTU7i4E1IwkTTciHNypM_", name: "_S1A6107" },
  { id: "1r3oIARlLHdGr1gic-eU_786Q1s0XbibW", name: "_S1A6108" },
  { id: "1vPq9nbp0neWyJHcGGlK6xjbWNlATA1S5", name: "_S1A6109" },
  { id: "1n60aYQUNDHf-VdI5yoonS84ft9VaQqYy", name: "_S1A6110" },
  { id: "13tSQVlDhn1aRa0UPsrjpq6EmzjbLyNY6", name: "_S1A6111" },
  { id: "1CmX9siky9tW7KBTvmn-SJsWksofx_pWZ", name: "_S1A6112" },
  { id: "1FYNTgtX8pjwTj-En-eUyHgsKTmzlAPwR", name: "_S1A6113" },
  { id: "1-VSj5J7yEKIA-HLSCUEysMI9I5t0xNOX", name: "_S1A6114" },
  { id: "1m_w1601d2eAaWWVAnMH1hxpp_SbucuXV", name: "_S1A6115" },
  { id: "1KZNWUvsPj4sNFZChbxUTrXILE2pc4QqB", name: "_S1A6116" },
  { id: "1ARQc-Nzh7OVFwz0_haMmCwSqhmy11Qmy", name: "_S1A6117" },
  { id: "1e1Ue6wp6Ke6biZaIYjIGuzCy0dIX6JRY", name: "_S1A6118" },
  { id: "1k5bZ1Lp9sqgKarMh64snL4fu3jpyytsy", name: "_S1A6119" },
  { id: "1A9JlKoSYUT0iThONiPQhy2SyoHeDhqg6", name: "_S1A6120" },
  { id: "1CBlCsoXDGKI2aMFvVPMpcNk9WqR1tPPJ", name: "_S1A6121" },
  { id: "1ic6StmX3kOmCiJ313As7y8Zqn_h2xNQS", name: "_S1A6122" },
  { id: "1V2VDzM0ugmjELM3FtzMNBiIXsKk8SOE_", name: "_S1A6123" },
  { id: "14QAHiBemTQ9ItUhK06rgFybfQ_eV5VjD", name: "_S1A6124" },
  { id: "1ozL0biTKGkMSkJiSa2Iq93t95Bz-aONw", name: "_S1A6125" },
  { id: "1OLYmb6U7jagdUApaczBTQjb-Sg6hkfAS", name: "_S1A6126" },
  { id: "1jk3XY_sPdN7KG0yTOSa5ps7OneatRgeE", name: "_S1A6127" },
  { id: "1-OeqwAjPpTwh8q95WSY9IYC-DFNbwNhd", name: "_S1A6128" },
  { id: "1iDn9SXu9752Cmuhyqavaviuo9CzNdc6G", name: "_S1A6129" },
  { id: "1HfkuUArwmcVMnIlTM1P6JwLSHJMzP7Q8", name: "_S1A6130" },
  { id: "1mE6lGgk12dkQVX24BGEm6B1howV5edzW", name: "_S1A6131" },
  { id: "1FwJI4cSA0btd96RsJmMpjSTdR_32gnxh", name: "_S1A6132" },
  { id: "1MX9O5N6KhchQa5NbT8djJ3vd5_JEuW93", name: "_S1A6133" },
  { id: "1eIxw6EpogVEgaE2rf6LA-2sR92w0aEAO", name: "_S1A6134" },
  { id: "1Io0uoGqoENGmiyQG_C6UfjnpE043sZQI", name: "_S1A6135" },
  { id: "1tEq6P3_HSVrQldWyKpKfM9LPjgFexHiq", name: "_S1A6136" },
  { id: "18nZhomYyWAY1YkHtPFR2gKdledmBBF6m", name: "_S1A6137" },
  { id: "1d4vj4anbQGzfZGgKuvJ8f8KlJg67ZhCz", name: "_S1A6138" },
  { id: "16R6HZIbm9rvVmFo5VNsZEeMaDXyyaI9Y", name: "_S1A6139" },
  { id: "1iB6bFEFpEIlCMAue_nyM43F60awRL7We", name: "_S1A6140" },
  { id: "17lxTFqkXRo_hf_8HANX0eA6Spgi2uLyb", name: "_S1A6141" },
  { id: "1vvB4HfTWJRg1kMxW2gH9g52SU4sPuv_6", name: "_S1A6145" },
  { id: "1CroeiUWmcMPIlLRRlgUphLTizfkCFUNY", name: "_S1A6146" },
  { id: "1CGX2bBKSVmzV7UoP8HZ4-xVGsmpcRmxy", name: "_S1A6147" },
  { id: "1c6sItMTKF2F2kir2YkUNsyA1d3hzkUC7", name: "_S1A6148" },
  { id: "1-M1sTBbGcRdugMVQ8tvo2LY4o6V39sGX", name: "_S1A6149" },
  { id: "1UC9FLt-qsoJCEHmeiqz_w1sOhLYxp-g8", name: "_S1A6150" },
  { id: "188vbQDSYiRtq_5NWlkHx3HNPgDnjIHlg", name: "_S1A6152" },
  { id: "1kN2A-C1_g7VvhfKUt_n9o2FJM0-KXu9t", name: "_S1A6153" },
  { id: "1RyT2PsrBIzEQt_oMe68T67jj0lop5NJo", name: "_S1A6154" },
  { id: "1Nsk1WUBWSC2uo1hsVkF66coG-Wzws4gc", name: "_S1A6155" },
  { id: "1wUvFqYA1Pwb4L0UIuw0y4vWFY39QJ_uQ", name: "_S1A6156" },
  { id: "1tK3luDoY_NskX74vXNYrF7yKxBkVW4mu", name: "_S1A6157" },
  { id: "1u-kvTvx3AR30sOWNozFYgHoZ1RUzgnPX", name: "_S1A6158" },
  { id: "12r2H-lRKF6X2TgIGUyZoFeHxxlr8Bo7f", name: "_S1A6159" },
  { id: "1EJic56_dQxeoYNlG1ea69xNyolB9a0Wz", name: "_S1A6160" },
  { id: "1gHIZXwOcSaUkj-7JyVGXZauNHQwEk69Z", name: "_S1A6161" },
  { id: "1EDdVYYxepyyFXd0VdeMuwpBulWkaYUlk", name: "_S1A6163" },
  { id: "1KdC_KEowyL1UC6ipnu1_07TUzYKNm1os", name: "_S1A6164" },
  { id: "1R56lLtzrBdDssqLkHGudTstbMduWCxP4", name: "_S1A6165" },
  { id: "1jAv2-5P46M_51SyLiFBVtCQ2KL99QRKP", name: "_S1A6166" },
  { id: "1WyPKL55c0mJk_nPuNXf14VOL_qEQ_4dY", name: "_S1A6167" },
  { id: "1bhyUw9ZQYrwpObGyWmHqSKATNRyoz5sS", name: "_S1A6169" },
  { id: "16nPzCEFM9_T_3pjcMoqj_YrIGAUmhLZT", name: "_S1A6170" },
  { id: "1GWcUDi5SXUwxuIaPeOf4mG9Rej0-yOUq", name: "_S1A6171" },
  { id: "1t-oAP1kQskZo4KYtxAFvDgIGZQYvHoSz", name: "_S1A6172" },
  { id: "15v19oUc6sl0SBDaznkc7Q-vWVD4giTaB", name: "_S1A6173" },
  { id: "1Mykq4SkQ_n0AGM9UCq2CdNVVhZ73kaAi", name: "_S1A6174" },
  { id: "1JOsj1BEBzvuJqTDxcG8g4RlaTvBp8-qd", name: "_S1A6175" },
  { id: "1sXvTK_R-O6P7_fL1bV8zxiaOgSBod4-F", name: "_S1A6176" },
  { id: "1kYaGHYFn6jB4jWhfdOn9npwIMqYq5oKt", name: "_S1A6177" },
  { id: "1TV_AgYWxlb5XbyEErLD3xemwFuxt8vB2", name: "_S1A6178" },
  { id: "1E06BdHmQp5qqllh8fcwwAYHDnJPbTqRX", name: "_S1A6179" },
  { id: "17vWOleiCC2dGHmhWtWCadWJUfUj7qtHN", name: "_S1A6180" },
  { id: "16y58K-ul4JdHB5BuJFXWWk0e9gFaWFOj", name: "_S1A6181" },
  { id: "1Rw-h2rEV4IYkzFfFKv_5AJxsPxA7hbq7", name: "_S1A6182" },
  { id: "1YKE9zVw2D5jHro_RTE3FFe3NIhgoFowE", name: "_S1A6183" },
  { id: "1Z5Uapg4XXhnWsV0Vtc8ZK7AIX15vvkvj", name: "_S1A6184" },
  { id: "1mUCj00CX_ooy2ZCmJ7mI71B7dVsA-CtT", name: "_S1A6185" },
  { id: "1h_Hk3dmmdPBg1iXhooOeFmzhokIP5dKW", name: "_S1A6186" },
  { id: "1UdqvPWqkYHe9Lzice56ahDF9h_BECUi-", name: "_S1A6187" },
  { id: "18VVu6inCT8XXegRCU_IsyqcKECvXjj15", name: "_S1A6188" },
  { id: "1HjiDp8eC8_xuxChEcj1S1ogvr97VOl1P", name: "_S1A6189" },
  { id: "1EyCeMtEqKhMIH3Jm8PoJpTGyfNiyfkZY", name: "_S1A6190" },
  { id: "1ejcCwpWtoKqiCNyCcKVw0NeRD5jmum3J", name: "_S1A6191" },
  { id: "1v174dJ2N6Qd1iJI_Iq4mOe-mkSyng3y_", name: "_S1A6192" },
  { id: "1veP1Fk8h0qZBLrBsBrxZ62XISMpBEkrO", name: "_S1A6193" },
  { id: "1vvD3XjF-_-wfpgdOUV3ZhpUAHI5u4CdS", name: "_S1A6194" },
  { id: "181lrDIHyQA3sOeY-67wMWZN9FawTXAcy", name: "_S1A6195" },
  { id: "1uv7Kht3u2HKulfyZfjsesJBFXls76n0P", name: "_S1A6196" },
  { id: "11tSBvr4S6kIVS6aTyZ60ft1P5iAsZVri", name: "_S1A6197" },
  { id: "1GFIkgtUNbwH-l8haYLoPSGH7FkxEfjGo", name: "_S1A6198" },
  { id: "1srzLWRv_aF-ive_yIRbEXtH5Xipc4Grz", name: "_S1A6199" },
  { id: "1GFAQTm0mcuzijzxR7h14lhNorviUmOgj", name: "_S1A6200" },
  { id: "1qlLxFcXgJ7WQxboWgz-e3mb-nvzBesXK", name: "_S1A6202" },
  { id: "19_JEqzoqZav1ikITtPJZU-mpVkGpnHNu", name: "_S1A6203" },
  { id: "1GtyIG6PjKpJQlbZk5Opr0OL9emF0K21j", name: "_S1A6205" },
  { id: "1xfM8L6AOYkkPQLk0IxGPvj1myJdL1Dnf", name: "_S1A6206" },
  { id: "1DKcinNha7VwiTDRkXNLrA5384nGruVdW", name: "_S1A6207" },
  { id: "1xqtGqRiKAMvxK5jCkgzhcgXlx2Zsd6qf", name: "_S1A6208" },
  { id: "1LJqtPC6NFSphCODdA-4Ic-jNgxjsBsNl", name: "_S1A6209" },
  { id: "1NioeRzs_BKOBCHIMNN5ySp1Bj2Ks2CnH", name: "_S1A6210" },
  { id: "1GLs5dg9wbAs2wlLoaMYT65t7ev90BZMA", name: "_S1A6211" },
  { id: "1tY64zsVEl7vUbddSsRPg4XOpTIb7fL0s", name: "_S1A6212" },
  { id: "1IjCmWpVXMKASBCuzfZV2IVtGX7hhYAK2", name: "_S1A6213" },
  { id: "13NTXlqY13S-D7zZQBz8erCFw4AG5EIUI", name: "_S1A6214" },
  { id: "1gdx6f6-TqAyJ0DqqghOijQUzU-WFQkMs", name: "_S1A6215" },
  { id: "1b9WRvVUru9S7LK58pauP7FWv4tbGVZQ2", name: "_S1A6216" },
  { id: "1BNDYj0-Av0lZ5Jf0lp9CV09jennC7vR5", name: "_S1A6218" },
  { id: "1_u5sIukoArk8yly93Z5w1R8By7YQWYm6", name: "_S1A6219" },
  { id: "1a1pfBCPNu4hUJDSQMHFeFdSTRv7ui8fe", name: "_S1A6220" },
  { id: "1ca3xK4GkGnB05f8ZIU0drS4q51AswQRz", name: "_S1A6221" },
  { id: "1danFL0t-1IqsdCct_k3lfMIqUD5vP5cp", name: "_S1A6222" },
  { id: "1SqJ8m7YC9mid-Fcm4jpfLh6xWtPfYjDB", name: "_S1A6223" },
  { id: "10DIs8m-zcj-mGy09HFClmKRR3KGmYR2x", name: "_S1A6224" },
  { id: "1t3fO_TW_GUSCBThNaESL0cfi83_R4WOL", name: "_S1A6225" },
  { id: "1Pa-9oyfAAugsNwnn7sBg_n6KPoOtRDGU", name: "_S1A6226" },
  { id: "1WOTyq-ITlgepVat6oBjGnDqALP71e_VU", name: "_S1A6227" },
  { id: "151BRpWDza06BzxyB8eMVDFoGDsqmsEKI", name: "_S1A6228" },
  { id: "1aOlAyt-rxfL7B0rcgmXTujUGYo2XA7BY", name: "_S1A6229" },
  { id: "1_-k67hIeluUPxwFp5v_xzgkXi_QC5XRO", name: "_S1A6230" },
  { id: "10rrMCv-pdaLjrzPh_cfDsWIAJfSpW_V1", name: "_S1A6231" },
  { id: "1xe1mPYTUMUb_5krdNNugL5SWgxR2SWpy", name: "_S1A6232" },
  { id: "1sodvn_vy0GatKFL5zAOqmO3G4o5VULVJ", name: "_S1A6233" },
  { id: "1_G2WrR2CLFYP0JoobvY0F4Ro-E3mCbeG", name: "_S1A6234" },
  { id: "1K_Xcx9ezC-8ceeXatSuUeLHfSLEaWGK5", name: "_S1A6235" },
  { id: "1rovLqdlmUKb67PNnCW1xqK-LaFN-8QOg", name: "_S1A6236" },
  { id: "1NF7BcYgh7RVJBPtRp4SUADQpr_vvHup2", name: "_S1A6237" },
  { id: "1HlcpcxxkLZzpjRXqpV0hONP6R_xejp14", name: "_S1A6238" },
  { id: "1F0t2NORFGJYCWF2JUzMUgGnHs_isdfVl", name: "_S1A6239" },
  { id: "1nyI1IujsKMHcsApkN6kSYh51xKFy-WIY", name: "_S1A6240" },
  { id: "1Z5btsDNjWtIUlixM9aD-LCrRBhG2Ox_f", name: "_S1A6241" },
  { id: "1XuJcV46QODl391TGnojafP3_ltzuC9Jh", name: "_S1A6242" },
  { id: "10-8yiJFDyzY7sWQtY55h6VdgeykyChS2", name: "_S1A6243" },
  { id: "1_dPWHH0GAfoJWlypN86rIV0Fq4n4MjtD", name: "_S1A6244" },
  { id: "1HBNZ0Kcc4yR4YTuZv2RKlHyRP2S-g-q0", name: "_S1A6245" },
  { id: "16TKzKmXtHfavH3uDoZikXIuXBdzS7ElN", name: "_S1A6246" },
  { id: "10rUCU8POyVyehdKMRPjJe40ajCK96Bmw", name: "_S1A6247" },
  { id: "15ovqkoNXerK76ckpMwsuUCJT3ctTTJg0", name: "_S1A6248" },
  { id: "1ynBgkDevvSYNqErHS6BozeAs-NNlgFTk", name: "_S1A6249" },
  { id: "1QVAi2CZs35zbVVcgR9nSCxrnLpx07peS", name: "_S1A6250" },
  { id: "1FrsTbBfrlMGdnZI3LdinjvsgkIyKbyez", name: "_S1A6251" },
  { id: "1c1omWdjnsTp4TTXcicRcVssCjO62qlne", name: "_S1A6252" },
  { id: "106TJ0EIckmQzmFH2Fzz7YC0Q5dNr6KO_", name: "_S1A6253" },
  { id: "10RtHSJKwHXJXTYecKtC_SQ8_4mQgmAe1", name: "_S1A6254" },
  { id: "1x57OU4pqDdyayPSO23vIn3m0--4i8OoF", name: "_S1A6255" },
  { id: "1QvH_93OTBxPT-u5h7EnJcV3NquFRboTR", name: "_S1A6256" },
  { id: "18b5MPFouVI1o5heQKl0q-NooH4g28T1q", name: "_S1A6257" },
  { id: "1sNij3a4LpQFw2jT6CLyDhCEb8Q0nslC0", name: "_S1A6258" },
  { id: "1xNImaE7OorhOya0ndLtykEJHRI20GDXx", name: "_S1A6259" },
  { id: "1AM2MR3ZuA2s7IGE4JaeDQe9zHdbf6ICN", name: "_S1A6260" },
  { id: "1dhDpc_4F5Xw90oDTPha3QWO2GndbXMqj", name: "_S1A6261" },
  { id: "1Qw3F7_MqLnKbAY-XOt8qugJBhwhaLe9K", name: "_S1A6262" },
  { id: "1XoZZJsvDPGVMukR-9vB5VB3l3Roh_naf", name: "_S1A6263" },
  { id: "1KPwAZmp8NlmAo7EtdJVUxk3lM569DEOV", name: "_S1A6264" },
  { id: "1YPQYCKA6MWzKOPuWMarhPb-yy0PzuCXt", name: "_S1A6265" },
  { id: "1WV4Bjhnjv89BbfYGX0tAkPrAEfKrHG5O", name: "_S1A6266" },
  { id: "1oM62N-elpDgbQI3TXe3VTNA0R4na6P0C", name: "_S1A6267" },
  { id: "1Y2nB4oahLBHfrwZjdEFofX7f1Ltm-9Ux", name: "_S1A6268" },
  { id: "1gcr0HM_4pxNHWbMc9inPYlVIA2mp6lMU", name: "_S1A6269" },
  { id: "11RlPOWPcL5xDbxsiXvVzDXwwEExVpIVi", name: "_S1A6270" },
  { id: "1enn6pRBRPylzBXTyaGWmzhwAnZAHHaR8", name: "_S1A6271" },
  { id: "1eR_Dge_w9lTc8ZcjelhmLwEh_1KOy5be", name: "_S1A6272" },
  { id: "1m3e6eZmw5HXWkviK4N-w7Fc-7fiVMvrY", name: "_S1A6273" },
  { id: "1Jk7ivLjoAAE5zTS92mJgTlDlmiAcuE9b", name: "_S1A6274" },
  { id: "1jsxu11VIFuBqbsQNz6bTRWFMlxD-9Sam", name: "_S1A6275" },
  { id: "1XL9YYihgPdpFgbmzXTBvuN3zFIZ_OkGq", name: "_S1A6276" },
  { id: "1Iif0dBHMK8ypXP8UNrHs1QogAaVOdxIK", name: "_S1A6277" },
  { id: "1JlWUcE5x7_cIA1Egg8hOEghicf_1_npK", name: "_S1A6278" },
  { id: "1VUttvedPNRJqwcRCYa9k5jo_KXK3FGFs", name: "_S1A6279" },
  { id: "1YSVwpTnqaLfrXsfE0WnKIKQx1DqPBr3a", name: "_S1A6280" },
  { id: "16g2eyrPjvlU-1oVyH32NdBha9t3Lsw_4", name: "_S1A6283" },
  { id: "1A9Lzj10jYRWuT6ZUjYBhN2idAXiw4_W4", name: "_S1A6284" },
  { id: "1cQgPnGjGd_v8wXJglwU9ISDfxb8VlQrj", name: "_S1A6285" },
  { id: "1lI-4YP7eyerMh9kigtjcznCUASzUl6xo", name: "_S1A6286" },
  { id: "1nkd_PHLbRu4hlMJoki_Sn_4bAxm9wsKU", name: "_S1A6287" },
  { id: "15DDVdcKjb-JvSA41XRnXgt7YimYISORg", name: "_S1A6288" },
  { id: "1hPS3Y4wdpaAGBlc_ujyqBZlIbNKjKaNV", name: "_S1A6289" },
  { id: "1dpoYiFsFqMahigq7_cbQZgERuGywp9nt", name: "_S1A6291" },
  { id: "1FOxl7ZaKSTsZb5mxyJ0CjlWkuuZtZhsG", name: "_S1A6292" },
  { id: "1SVsI9qbICpZ6TRPnZsU2jdlEMplETPbn", name: "_S1A6293" },
  { id: "1gsgLmHZZfkejSvTdZIrzh3H6NCo2HLNd", name: "_S1A6294" },
  { id: "1dXm9bmNy9ORmukHEpCv60ZYVVLFyu5jp", name: "_S1A6295" },
  { id: "1MSxToktlZm42Rzjj-2Y5pvqsk5Pv-w0N", name: "_S1A6296" },
  { id: "15kEVEKnN6aOJ7X1goDfQGrr5CF5DBNVa", name: "_S1A6297" },
  { id: "1mdUyTdqloahqQMUnqmeaErFNvMRRstFb", name: "_S1A6298" },
  { id: "1_0pPIgBeSRxiFVLHu0-Njy-Cj6q07Hn0", name: "_S1A6299" },
  { id: "12SOf7vlV8IRkIw5nzB5IlqEiuaOhumuy", name: "_S1A6300" },
  { id: "1hK3k-G0H6gjCMX_v2zzurXRQAywEOiR5", name: "_S1A6301" },
  { id: "1U6qCj80SWQXeiTpyPIXjYfLMJRza9lW5", name: "_S1A6302" },
  { id: "1-7T3ctzMuEaMui4S2nPymRT3rhNj-5Qy", name: "_S1A6303" },
  { id: "1SwkWcH-yBIPtdqoO-gBL7dTv5tQgB_j_", name: "_S1A6304" },
  { id: "1RgI5wbiUbmHxk0xrPEpkASBXU61-MmXA", name: "_S1A6305" },
  { id: "1aHBi49laQU8wIU5i9uhKBwrDMcpNq6aF", name: "_S1A6306" },
  { id: "1sy4KX-T5EjabwAY6g_z8B4AEB3Hrb4_b", name: "_S1A6307" },
  { id: "128WAmQsW5IIll81-m3jpz4yRaIq1J0XX", name: "_S1A6308" },
  { id: "14Xt_DsZ-w7ZL-VgCuamVIzs50XMPg4zZ", name: "_S1A6309" },
  { id: "17We3C9Z9aUn_IAq38UVaiLYqmprr7-fW", name: "_S1A6310" },
  { id: "1UIN9VWrVNlmk9irI0RJ7vEnxVdz6eEOb", name: "_S1A6311" },
  { id: "1KJsYMlDfluKxbARVahIib5c6Rm1osbTR", name: "_S1A6312" },
  { id: "1vLS-KuJxJuIpvNG4qie5-OHloKxvuZHg", name: "_S1A6313" },
  { id: "1XlaW5YR55VAfTNX00XSxZmCjWCx8MP5g", name: "_S1A6314" },
  { id: "1FONXVDdZRzVnFkXPSRj98cNVhvm3_MYD", name: "_S1A6315" },
  { id: "1g73R5ytMge6xrVFodcl3P0uTIwKFMxsJ", name: "_S1A6316" },
  { id: "12YSAfy6_ND33Z6BEkmQWwucdik5FCxgL", name: "_S1A6317" },
  { id: "10ZhBXvSU9pbX0g_3FcGHsJXmmiKZLVED", name: "_S1A6318" },
  { id: "1LbNhB8MWP7OOSo8Tg_otP9RRhMLiQbL4", name: "_S1A6319" },
  { id: "13p7LWzzAF3xGGikvaC5KuvrihMG5Nu2H", name: "_S1A6320" },
  { id: "1aMSh_TJC59C5X8qkXuOKfshOHb-ssE7g", name: "_S1A6321" },
  { id: "1BsdJEFY79u4X2c81aQPvTRs-WH8j3CxS", name: "_S1A6322" },
  { id: "1-7oQpoxQQD7y5MBUaLoFRRhH9Ku8Bqeq", name: "_S1A6323" },
  { id: "1NsWJqP4wYE2U00PzWCe7wiH5Tg7d_4Tm", name: "_S1A6324" },
  { id: "1ySsrvXua7OwUGkBbnA5f4ujwTrYNFqHW", name: "_S1A6325" },
  { id: "1edFPz6BvOBCP3stSbJKNzMWpAU6JloMU", name: "_S1A6326" },
  { id: "1hXhclWPVcA4hN0JI7NL2TooZ67ZYMCg3", name: "_S1A6328" },
  { id: "1gL82BF9mQx0FWinuX-CTtvvgVHQ8qYdV", name: "_S1A6329" },
  { id: "1RC7zXtv6Pu5MD95374QJAwQpK5Oa8vAT", name: "_S1A6330" },
  { id: "12pGcC83NbTNQFn4b6Cw4I-n34ySR9qm0", name: "_S1A6331" },
  { id: "1sZQdy4k4m_1cUzOxFhuZKHPnVT3a5Np_", name: "_S1A6332" },
  { id: "16Bge_u9lJTdYMy-vCp64lfCiyEv6A1OZ", name: "_S1A6333" },
  { id: "1DbhNxtubLG39D1RHmHCJMkaHY5wCQexg", name: "_S1A6334" },
  { id: "1-4wLHc4GUvvdXGfUeKF0JGfpXI90sJQ_", name: "_S1A6336" },
  { id: "1debbUMNZ-GM0H9fnRi3D_h_BZQbR8Oc0", name: "_S1A6337" },
  { id: "1YlsucXIF-szxHUT9ZqiMklanp9wtgrNS", name: "_S1A6338" },
  { id: "1qImKR2sPsy7zLLysdmXqZGVd6PAWnD4d", name: "_S1A6339" },
  { id: "1jDp68dAdtLfAb_sp2dwSnoPfPBBoVC1z", name: "_S1A6340" },
  { id: "1URPb6Ah_5DGMxqfCipB9Sy1GnOqekezB", name: "_S1A6341" },
  { id: "1Noes3VkFRO1AixxyZsmP4fM3CqPc-mAj", name: "_S1A6342" },
  { id: "1UG-A4etfojksFLioUUh1WiccW_8HxtT2", name: "_S1A6343" },
  { id: "1IkZI_KKKZfQbYXf7OoXP3BhLfPwdbgq5", name: "_S1A6344" },
  { id: "1T74511T7NG12lKMJJa3BxhmQmCD4BeAT", name: "_S1A6345" },
  { id: "1jYhpD5_IJ2jwxzgDFxppYzR9W7NgP-ji", name: "_S1A6346" },
  { id: "16QjpPirFeTR58WZzd5Oz975YYPdgUXyB", name: "_S1A6347" },
  { id: "1QhvJ3crXdQZgzt8G_Zi4wgwRbfnKtX2B", name: "_S1A6348" },
  { id: "1zaCi2aj2H2JHbPBhWwG1A_m0Qxl65MNc", name: "_S1A6349" },
  { id: "1tsHmgJVmy6aXndhq9Wv30HqcAnNT6HHw", name: "_S1A6350" },
  { id: "1Sd9PTPFXAmjqaJnkGIqgFqdtYz1w5ePz", name: "_S1A6351" },
  { id: "17pWJDMmEVpT_zKbLIv75WTjt-2UtgREr", name: "_S1A6352" },
  { id: "15lpVJt4IncwkZkaoOkcsrGhEhNyO3SGl", name: "_S1A6353" },
  { id: "1mWRSgma0h3RdEQOztMCBZZzycnjsb5zV", name: "_S1A6354" },
  { id: "12wBM2LiGXEgO4se5Tu4OTn-ZHiZm8MJa", name: "_S1A6355" },
  { id: "1Fu6p6zZf4Rg99RTD1bxEzjxuIVjqIC24", name: "_S1A6356" },
  { id: "1Jq4yhahJNO5GcaxcDrY1H7WXdtzDAT2R", name: "_S1A6357" },
  { id: "1vubhtMOAoq3FWDUVwrjs3yL_frWFmnUn", name: "_S1A6358" },
  { id: "1dIrKxyJP0LiamIVahWppCDxgpMXVXC-W", name: "_S1A6359" },
  { id: "1WAtC05vRhypVPGKw9fS3vbrymKmrDPTR", name: "_S1A6360" },
  { id: "154YOguW8LHvfa9iQ2yEBE8PDc6yL7WUt", name: "_S1A6361" },
  { id: "1Vub6PFZ0SaoPrhXT8JeIgQingquzBRBM", name: "_S1A6362" },
  { id: "142XNwYScar-U3srYjhuSxU847tWn3EXW", name: "_S1A6363" },
  { id: "1nC_ZdfQFiPVV2f0j9BtoxlpIJhcNvHhN", name: "_S1A6364" },
  { id: "1due4ZkRLWTVMYaMp_KocTRa-ZEOrQmeL", name: "_S1A6365" },
  { id: "1FJ0HzP7GekEIYxhDBOp48FGxQH738UTQ", name: "_S1A6366" },
  { id: "1QNk1dueWP8abRujtfRzw0t6AZDgRscRo", name: "_S1A6367" },
  { id: "1LcrWyKvq9FkbjAHEIdMQ3N_jh9zNNoGD", name: "_S1A6368" },
  { id: "1P-EHRLBs9rL8kxwOr_X1nAA5QYe7PcIe", name: "_S1A6369" },
  { id: "1BX23mj5VtiN25D-FffIL7Z1V0QrltKWN", name: "_S1A6370" },
  { id: "1DU5645SqWvfoj9JVRJi1jBoVss7yyS5l", name: "_S1A6371" },
  { id: "1DpqnlYrUKIfNP8bSeHwTsR2SHklu4yFN", name: "_S1A6372" },
  { id: "1iD4uKQajaZCGiBDYT-A5LJzRldcTZk82", name: "_S1A6373" },
  { id: "1Rcu99pRsciDOmtlghV6_Y8pH95tCvQrH", name: "_S1A6374" },
  { id: "1H8qlZiYuk_MOQTbFAZG4Ab7opHsnIayZ", name: "_S1A6375" },
  { id: "1msJkLyvBXCKwp61lA4D5CZysWxJvn2Zr", name: "_S1A6376" },
  { id: "14LCWdqVQHcU-fuyQCgQEOngW8smKZMvi", name: "_S1A6377" },
  { id: "1VvIY406rMFFeIZmBuMOX4zrbjdQXccZw", name: "_S1A6378" },
  { id: "1tftgYmGK9u-JoceKTVgNT_6njI3ZBJP0", name: "_S1A6379" },
  { id: "1sxuByInO8738HeVJMkD-l9HNXYvdViLt", name: "_S1A6380" },
  { id: "1p372p7XUeKFPq0b9QyYVZjwFV5Fxfqxv", name: "_S1A6381" },
  { id: "1z_aEMdohUaRfQVNjtIsHdt6o3E8W4ok_", name: "_S1A6382" },
  { id: "1AoTy9lquaTHKbC3KNolQu7My13FCz9Ps", name: "_S1A6383" },
  { id: "1RavVy-GffX9IIpnvob_hzojESqVvA3IB", name: "_S1A6384" },
  { id: "1TAMFcya8q59oGuNvOPC-2ooBPNxGEyQ5", name: "_S1A6385" },
  { id: "1Mc8_yYjTHqI1dx1RAmwOVSNDTeA8yqHb", name: "_S1A6386" },
  { id: "1uYUIe3y2mjmaXMCUXJPuhPyZF4uGxM--", name: "_S1A6387" },
  { id: "1nce40wzdM5W-GIw98vFRfg44bdA9OG6X", name: "_S1A6388" },
  { id: "1BYRRx7BJAaMr98RKiOzx86T7Combf4xg", name: "_S1A6389" },
  { id: "163MqvnxtKNuKtAZdrFv7ilckLhnzMPjx", name: "_S1A6390" },
  { id: "1n-IgCzYKtp1UdRpq6ai3CAYRefeUKdOH", name: "_S1A6391" },
  { id: "1oQRknON81sLSuwHlJso7mHzR8PgS3h6A", name: "_S1A6392" },
  { id: "1ge1L426rL-HioUl2Jm0tgLX6Cix8kmIL", name: "_S1A6393" },
  { id: "1XS3JKukNcIE1UXckWfVAna8B0n0Aii1j", name: "_S1A6394" },
  { id: "1iIKeKEDNQJ0XgMce095VYkEO-a1f02Nd", name: "_S1A6395" },
  { id: "1dABfQSe4fUC61iMw5z0c9td5YQZyV9ka", name: "_S1A6396" },
  { id: "1iZ17O2JSktdukiSbDrf43aJVz3_jFRXj", name: "_S1A6397" },
  { id: "1EYMx-dIuFjJJmlNoJpP2MUdNc2w43_12", name: "_S1A6398" },
  { id: "1pOS-mfU6vaAwwls7zS5mD2llwMiD8_lK", name: "_S1A6399" },
  { id: "1B3O49gxyj3G75Fyy9NJhhBUk2DcKaVp5", name: "_S1A6400" },
  { id: "1QgMCjhvDzCHgyQndss6ObYHGI_wZm4kP", name: "_S1A6401" },
  { id: "1uzXFgiylVT1Cqsv5tm09jerT1iiWKGKs", name: "_S1A6402" },
  { id: "1UL-VK6A7vehujtfWPL2C76e8qZ51tcYb", name: "_S1A6403" },
  { id: "1v3KKg6MnzMqk-pfaKj4lB_qdhTpb4y8Q", name: "_S1A6404" },
  { id: "1hMe_y5Zl5S0m3gx-l2dqmb1GIQV0k3oe", name: "_S1A6405" },
  { id: "1IWqvk_elPpzfELTRnVtYoPfuXhAg7RDT", name: "_S1A6406" },
  { id: "10k0sCryELQtcRsuiQAiSU-g_FFzds_No", name: "_S1A6407" },
  { id: "1xVQXCiL7nEjzknp--1vO3Nujnu522NsX", name: "_S1A6408" },
  { id: "1KsN-EUAsXyQY_HDn2RIHIuYxGuLd6V_B", name: "_S1A6409" },
  { id: "1TTi-60x7sXhguZDI8PK-RFz8zf-OBnzj", name: "_S1A6410" },
  { id: "1TZGHFxmh-Qh4VvfRNpWomT17bZ2FuwAz", name: "_S1A6411" },
  { id: "17qKlWbRBMoukQ9V1lhAgypUM8HNpiMp2", name: "_S1A6412" },
  { id: "16FE6UIQisOiJchbR61jCf2i27v2_d88K", name: "_S1A6413" },
  { id: "1JHAzZz9OjVnwegUAA7VjubTHOBa9p3DF", name: "_S1A6414" },
  { id: "1hzUxHfSVT80LCzRyfccAhPjV24rendTE", name: "_S1A6415" },
  { id: "1128OMHo7Qoik6ofacqL5cPeuUL5R13x9", name: "_S1A6416" },
  { id: "1BPQPC3bEo8BTTHKoTT1yjPMKd2JL3Rij", name: "_S1A6417" },
  { id: "1sd58oy5uR1STEYT3xRsYXhVF3sQqYfna", name: "_S1A6418" },
  { id: "1NqskGZeRhB9LqQxCvGonPIK0nUwMkA_G", name: "_S1A6419" },
  { id: "1Tg_lR1hzH4ek9I7LqFEl34ZQCxIURDUY", name: "_S1A6420" },
  { id: "1AMsvaTZtfJg7_NBvrSFCgb00KBREYR3_", name: "_S1A6421" },
  { id: "1N2_2zDkGb3nV5PpJ6Ji5E8qlEEH21vJZ", name: "_S1A6422" },
  { id: "1exceaZCnifbCwPGlPVlpsj3fGRvvSyhr", name: "_S1A6423" },
  { id: "1ZpgEjurIQp4XbhuqG7SpwaNKectf2oA_", name: "_S1A6424" },
  { id: "1IqAY5zRipNldDtI0EB5oe3B5YbFqqxY3", name: "_S1A6425" },
  { id: "1S3eBu05fCYqZwEQJcqDEV9acLGf1upqE", name: "_S1A6426" },
  { id: "1tIF_PyvAjS99nlFZENkMkAY2OsGGvG2u", name: "_S1A6427" },
  { id: "1UYhhLm2c1C7WnJvDRvDXJW26A2AlhYjl", name: "_S1A6428" },
  { id: "1qE2j5sh4rtDSmpFGSRv7zOGdBZNtZ3jn", name: "_S1A6429" },
  { id: "18m39XWmSo00w3bv8kR1FdefoJI5Mv1kx", name: "_S1A6430" },
  { id: "1sXZ74-VlA7fHYhb-9u67joNvKrmJifFO", name: "_S1A6431" },
  { id: "18-nrV5BhlA2zRXVv2DsqpnOEKOzCkifx", name: "_S1A6432" },
  { id: "1OG7gCrD5aHMuXdCNtntKttu97esNTv27", name: "_S1A6433" },
  { id: "1d2lRLqkhzDLLgJHfaeNHVWryvQKNUrzs", name: "_S1A6434" },
  { id: "1_nKLYxO3Ms1vpTIQk0kry4lAIxb7dMIf", name: "_S1A6435" },
  { id: "16vr1qbHIc1TqlbfiJjJ0PQpMIa7C83zd", name: "_S1A6436" },
  { id: "1TLGfI_317vCw5OpRDZDsPeGK_dOKRhqX", name: "_S1A6437" },
  { id: "1LHuUIqyr6ceEO3AsyHvwQ-4VfNh0-er0", name: "_S1A6438" },
  { id: "12gqp38h1r7SLrYLo0ZZUw53Hd53w2zgh", name: "_S1A6439" },
  { id: "1SyJxsCYFuOhYPUT9JWGnzQiBaHa8SULQ", name: "_S1A6440" },
  { id: "1wLSxKL41Fz1QcuSz12r3ea4znLZkQR4F", name: "_S1A6441" },
  { id: "1okL4BbXcMoUbhlhDhdJulQUgWOJlpTd3", name: "_S1A6442" },
  { id: "10_PP76t0S1cWA3nzyTy9i0eQ7zmPVTCO", name: "_S1A6443" },
  { id: "1bIJb79fzsGK0Z_q11cEhXnSJAp3vKdQy", name: "_S1A6444" },
  { id: "1n2riyLAMDK36bxP9_sXcGvgJCXclNZRj", name: "_S1A6447" },
  { id: "1Emv270QTDHL4EVJcOK67fWZErxV3iGf9", name: "_S1A6448" },
  { id: "1ac5dw_EX8e4WNOOwdXO8GnOlDUeK4LXc", name: "_S1A6450" },
  { id: "15zvKrOqm0194Dkqu6QAlHYayqrmQyF4_", name: "_S1A6451" },
  { id: "1xA4zxvtLGemtfoExOXAYV2thRfGSKajN", name: "_S1A6452" },
  { id: "1qyxyLhWLGQbdAfGBhI-v99ksHJsHKkKj", name: "_S1A6453" },
  { id: "1xVHSefcjxLm7suzsBjxHvFmYnwpHMoHW", name: "_S1A6454" },
  { id: "1wfOu7C-4NgflczZYb8RNc9-f3cZYoXeM", name: "_S1A6456" },
  { id: "1AI2TTqug1Fchb0zHo3jTsyDUhv7ZPfZ9", name: "_S1A6457" },
  { id: "18slh3QoV6Ty4TxuS_XlO62Awqbls-ILy", name: "_S1A6458" },
  { id: "1xvCvFV8oFteT654OCclLmLD7eAVQnctL", name: "_S1A6459" },
  { id: "1bEozSdgcMXNvV7MgYAZnYdiG3_fdJT0W", name: "_S1A6460" },
  { id: "1WwOkOH9W2qewdewrEvR90sS8NcyRDAgH", name: "_S1A6461" },
  { id: "1TysyGl7nOb-sLUJCFRYPsox2Yb0kzdo1", name: "_S1A6462" },
  { id: "17ir_d071fUZQvw4uivXGwQl02OphPzwm", name: "_S1A6463" },
  { id: "126SzyuoikWZZu4ibjRrYpbfn5jaTNm3w", name: "_S1A6464" },
  { id: "1H52Hc4n34q4Jc9OMpSIwoToGv7ypee8-", name: "_S1A6466" },
  { id: "1bMTj5sI8TgjGorLFVzEChN6ikySJ4tPz", name: "_S1A6467" },
  { id: "1B-DzDVqsgZ5P82sArI1q0QnKcC5JXa0h", name: "_S1A6468" },
  { id: "1H6Z1mpwcLW7OWMlpMLwRLqIDHEXBj3Zz", name: "_S1A6469" },
  { id: "1gFsPHx3ZPnU2lXPSjUpPbAi9VXGy1-YR", name: "_S1A6470" },
  { id: "1v8Gys4JeTxgmDA0TBxNAQdLBjtncKqD9", name: "_S1A6471" },
  { id: "1wx_SIHosUwD08xAuW7wSj04075qyBaWa", name: "_S1A6472" },
  { id: "13pP5wQOFiZPeXJ4ayMENY3RlYFpd8Grq", name: "_S1A6473" },
  { id: "1WjZqQ2VqD1orgBGMbnjH9lGKimjbOTGN", name: "_S1A6474" },
  { id: "1WatiifFs65Eh_I4BmllXBwLT8Pxkrdvm", name: "_S1A6475" },
  { id: "1seffP_kD8MXBw-x6O3wjqaq9kK-zlF8n", name: "_S1A6476" },
  { id: "1zc3S0Zs4IanmpdCC-phn-qb6OB96_2ri", name: "_S1A6477" },
  { id: "18UXyhvQ14J7a5hR0ylr0DcC45aUvp7jS", name: "_S1A6478" },
  { id: "1bK8NhtLxVxKrpxHyGGDOh4j5GNFrFk33", name: "_S1A6479" },
  { id: "1BwPRWWUSMMcjDgL8G98zcaLoYd-tTjF5", name: "_S1A6480" },
  { id: "1f9FM1zEm41FJ-3F9f4iXGRlYjQoZQihB", name: "_S1A6481" },
  { id: "1i_j4f1u4im8erHHTSH5TDyEQFjM90RlX", name: "_S1A6482" },
  { id: "1pxHA-JLeYeMrCEjEVPOZAtUSBERTYhgA", name: "_S1A6483" },
  { id: "15Z0D9iGiyhkfpHS-n2YrAGEH78gYBMYe", name: "_S1A6484" },
  { id: "12XFRlKniarmH84cx_NCEfyDxzVgfcwKt", name: "_S1A6486" },
  { id: "1y2NU-La8Gjyi3x0B_spq0x2I0iffQvKE", name: "_S1A6487" },
  { id: "1Dg8hXzP4Uvbcb4L8-_pAp28r9BVH_2Gw", name: "_S1A6488" },
  { id: "1TYzgT3qp-CRmrdkEC_-URLmd_xDv_Q-l", name: "_S1A6489" },
  { id: "10KOgi2MZZKYN976ASRquXcoS_fdJ2Jlq", name: "_S1A6490" },
  { id: "1y5oyfUnWSSmDZie2Tjl8Ess8bkxry--Z", name: "_S1A6491" },
  { id: "1PP_LLT-K1Real6ZY5ijvhcIVjHwutu7a", name: "_S1A6492" },
  { id: "1lcyKv0lsNZzSGIQ_gk76Ww8C83NU5Yb3", name: "_S1A6493" },
  { id: "1tIGRadVHwgIR7b92Hzb8t2OuY62n9JNN", name: "_S1A6494" },
  { id: "1IrYbnMCYRS90vXlhmkV3YRJEIKpR5PHG", name: "_S1A6495" },
  { id: "1UOaaxQoJgrEe9PCWVWXpgLc_Rg1OKOJD", name: "_S1A6496" },
  { id: "1M9sEPIX-Hft83rOX__i2EReRJ0Ftxr2o", name: "_S1A6497" },
  { id: "1hL6DlkyCkBpbZCRTT7EPtvb3kbIamyVb", name: "_S1A6498" },
  { id: "17OR5BxOebW2aSP9YtKLF9PN7HYwxtSoj", name: "_S1A6499" },
  { id: "1bkyCnT1fUHAIpTuCPiCcYYE6JrbF4p7Q", name: "_S1A6500" },
  { id: "1euc6NWJsQ4VubhgbDa10QaDOhkXW5JxH", name: "_S1A6501" },
  { id: "1EzhuXER-3Bbqef_M2SUGwq-DdZH4OEiI", name: "_S1A6502" },
  { id: "15tAekypQje3OPxLnHans0gmNVlIurPab", name: "_S1A6503" },
  { id: "1EmRG7QhBRiw6UkixTM-vpSSHsZjF6fGk", name: "_S1A6504" },
  { id: "1VxAVpkliSG9BBJUijdMcCHHHO2JEGrB2", name: "_S1A6505" },
  { id: "1uVTgRnpJrhOuIc3jrXfCip99VWgBEEKk", name: "_S1A6506" },
  { id: "10rA3Ttn9rm-tEgNSFNfrBp2qY1ThPIhw", name: "_S1A6507" },
  { id: "163KoikYxzSaLB6ry7xjJIxdlWeSRHppi", name: "_S1A6508" },
  { id: "1gKpnFUudO3OIYZMmEyfsjGQ_r_JlzPO1", name: "_S1A6509" },
  { id: "1JR3oDe_DH2Fg8_bHHG457QcLK_Fewoaj", name: "_S1A6510" },
  { id: "1e8Ztmf1TYj2wY7vKxhy-ILIsBKT3lvyD", name: "_S1A6511" },
  { id: "1e79NhpRVO8CTS8LR4dqafta6I0qcwBA_", name: "_S1A6512" },
  { id: "1C0gMWkjSaS0Vfs5LUe68rJ-RxIClwh94", name: "_S1A6513" },
  { id: "1inykvIv6jDTQyW66zsDUoj16P_eIrvKp", name: "_S1A6514" },
  { id: "1jUxGw5LG2HoJgJAFSOwvNnYcrN4j5Dqo", name: "_S1A6515" },
  { id: "1gjRLwcEpOxB-2jHAha3TIS4g2HccuD9i", name: "_S1A6516" },
  { id: "1MFNrDLlItTixmGx-_caJRqfgtb8Q0pUU", name: "_S1A6517" },
  { id: "1mtUO7jQIp-KSdZHLCqg8MuW_CoYiv3mF", name: "_S1A6518" },
  { id: "1Zq1zyG7jesIKOYZSaqZ9b3tOLPFdb6QT", name: "_S1A6519" },
  { id: "1tApZ_7HF362QGOZxzOJfg3QAOszvjFnA", name: "_S1A6520" },
  { id: "1HV6NMkfPgyjy7ry52KK3iZ_yoWPT6_Bj", name: "_S1A6521" },
  { id: "1KanIXoqtB-499VTUPp_gB7rTz5yfLyN4", name: "_S1A6522" },
  { id: "1VY1lTF-Cgrq5nZzR-PfU0yQkqDk1EVnN", name: "_S1A6523" },
  { id: "1hg6PIcLondvgmOCeq3yS6hsbjTfNDsLm", name: "_S1A6524" },
  { id: "1zMLIKk7AoKgrVVo9GwWohQQY6czZPcuF", name: "_S1A6525" },
  { id: "1vo-NmmZ1dStTkbWX9FSbelDRgmolPFAs", name: "_S1A6526" },
  { id: "1EbBFkkPis0PEXcOv631coHy1z8qM-0Bu", name: "_S1A6527" },
  { id: "1AZAWSgq8AY6JSou2s-Q9bi3zwC0alDKG", name: "_S1A6528" },
  { id: "1_dOK4Zx1Y3LiOojUZsHlL2QD_BQ53Ouk", name: "_S1A6529" },
  { id: "19Sk0H6PM3veFc2YhxS12dYN8D7ADin81", name: "_S1A6530" },
  { id: "13n2YJ6GSZSw4HcdqVMsBn0-4hKZrWJ6L", name: "_S1A6531" },
  { id: "1kf8kFtpMFl0Aa9VHRiiGckROyltfRorL", name: "_S1A6532" },
  { id: "1tVPWWziwQYNYIXW6lztW2Efiy-IF88hQ", name: "_S1A6533" },
  { id: "1OQk5mZDQFoC16jzh2VMjAqFyAh7YNd7J", name: "_S1A6534" },
  { id: "1gi2do7Fc31Nt5qY9Xz_sImMscDOPzdPa", name: "_S1A6535" },
  { id: "1lWV3GsZ8hLCeV65BYykHVG23I7PYyuG_", name: "_S1A6536" },
  { id: "1PGm-Y05SB4FRWBOey-b3hgoVAPz3SaWk", name: "_S1A6537" },
  { id: "1gMm4Yj3gRkvRqfijNrucw_MRKq-Q5UnH", name: "_S1A6538" },
  { id: "1kRwhXfZ8rsnl0JwAqYyE7IfJmbEr_yv4", name: "_S1A6539" },
  { id: "1y7hwZPdO6rVQFvZu9heWJQgBUane5t-B", name: "_S1A6540" },
  { id: "1bRyyKfv2FnBIVtMwX6LbXvmvqpCG3IE9", name: "_S1A6541" },
  { id: "1muV9PF69O8MjlUpRiw_fMhx1ScV4LWeL", name: "_S1A6542" },
  { id: "1s-V0pSEirlELkJDc1wW3B_gY3806yskS", name: "_S1A6543" },
  { id: "1NeQd741CB8VXgPjpVAkpsARuXOtn7yLR", name: "_S1A6544" },
  { id: "14wq-Oen3QLC5T_EnsfERlVUUtpffY7_i", name: "_S1A6545" },
  { id: "1HYpE7v9Fl55E-9ZZYpAQqVsnHRJEMxmH", name: "_S1A6546" },
  { id: "1hd6MbFjmakRwL2g1R7A5HUroP38IAhSO", name: "_S1A6547" },
  { id: "10h_qz-14l74KyaHPycFPw6hMc-iZpLsy", name: "_S1A6548" },
  { id: "1_4We36upelai3xuIHJAMrIe_3RXFJUsM", name: "_S1A6549" },
  { id: "1OFRoCeBSy9QU1ykZ8uu_w-riEBQbFtE3", name: "_S1A6550" },
  { id: "1hriBETaJFAKeAw8EWoWSLZnTlPxhpLgp", name: "_S1A6551" },
  { id: "1cQftvaVYbFSNUbi1qHcldmAbt5aW2Uov", name: "_S1A6552" },
  { id: "1Br-o4Vs-LcC746YRUUqiIuRt4UajbdaG", name: "_S1A6553" },
  { id: "1F9Rh-_tXTgoSozARYN4fMBKbGdB9hjdX", name: "_S1A6554" },
  { id: "1W1ItSpZThw1yV4HvP-OyUOca9p3_c7oe", name: "_S1A6555" },
  { id: "1d12cVUq4-NuTdKMs-DlM9Ojz6ibc0qHp", name: "_S1A6556" },
  { id: "1Nx4oy8peAuuHYHpMsTchfsi5v0X9ij9L", name: "_S1A6557" },
  { id: "1P8SEo4KOmJw4Wf5OZJiItUR270HKd3AX", name: "_S1A6558" },
  { id: "1L2LQq5in-5v8nxG3_8pdwupTNI50V668", name: "_S1A6559" },
  { id: "1KUYOySq3vyaHHqCIJa6_uEpo6rPyeSDF", name: "_S1A6560" },
  { id: "1AfVQCglK8mSMkydBBVgGfJxwfmpDtbu2", name: "_S1A6561" },
  { id: "1t9EoiIFuGtz5XCcROCp9QMsdJ3wMnTBV", name: "_S1A6562" },
  { id: "1XiUXL2LzmZ9skgTdFG9HDL0oHa0wSXQt", name: "_S1A6563" },
  { id: "1bMLuWXuuWdwf4AtnSumJlBh-ROnw-1kv", name: "_S1A6564" },
  { id: "1Xzih-6_QxGhsEcZkcl_Uw6ipSm2881Qo", name: "_S1A6565" },
  { id: "1epYOBoGsjyiqVk5BV8QynxWe86TDbF3o", name: "_S1A6566" },
  { id: "1gJnkNu16L5C45kK2bnjgTmD54PBX69bX", name: "_S1A6567" },
  { id: "1yY8Ja8Gn7KGZFhQrxL9JIZPInK2o0ogh", name: "_S1A6568" },
  { id: "1TiVyMYmkBYekkR67bJoZ85onbm7eiAIM", name: "_S1A6569" },
  { id: "1N_01tYJrFlbXEKYZ0hnl44kxkc978EZm", name: "_S1A6570" },
  { id: "1NKVOfPUohbydec74DMND7INHze-BkXZy", name: "_S1A6571" },
  { id: "1QpUF2rAwfL2Wbar3X9mHxaA51TBhEy4-", name: "1S1A5842" },
  { id: "1v_QP9hvYiiEqFhCmXazCC9a3tFu4tyTy", name: "1S1A5843" },
  { id: "16sFU7Xak3DLs406zhzEEDTgVR5FyuPTU", name: "1S1A5845" },
  { id: "1KZ2eJ7VJYZlOiTgu2nfavTnKJl8Z4SwK", name: "1S1A5847" },
  { id: "1EDgZORCkYGUpY37zP49yuWTD-5NO08rA", name: "1S1A5852" },
  { id: "13Lz0wlblKHlfa05OmZcghBgCLm6C1VS-", name: "1S1A5854" },
  { id: "1mL0L9A79PE4I24zkRje2lTo78FN2xtEp", name: "1S1A5856" },
  { id: "1H3_-3aJqe90YEfdYizszPiqee8ajQpd1", name: "1S1A5878" },
  { id: "1hCxyXbZ3sfeiwPgYyOsiPFjHXQ1ktzhp", name: "1S1A5922" },
  { id: "15AzmFKn2hlIq-ZBojlPOCgh1cGfzXccn", name: "1S1A5923" },
];

let photos = (SOURCE === "assets" ? window.ALBUM_PHOTOS || [] : DRIVE_PHOTOS).map((p) => ({ ...p }));

// Primary and fallback image URLs for a photo; Drive URLs work for "anyone with the link" files.
function photoSources(photo, width) {
  if (photo.url) return [photo.url];
  if (SOURCE === "drive") {
    return [
      `https://lh3.googleusercontent.com/d/${photo.id}=w${width}`,
      `https://drive.google.com/thumbnail?id=${photo.id}&sz=w${width}`,
    ];
  }
  return [];
}

const book = document.getElementById("book");
const bookWrap = document.getElementById("bookWrap");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const statusEl = document.getElementById("status");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");

// ---------- ornaments ----------

const CORNER = `<svg viewBox="0 0 60 60" aria-hidden="true">
  <path d="M3 57V22C3 11 11 3 22 3h35" />
  <path d="M9 57V25c0-9 7-16 16-16h32" stroke-width="0.8" />
  <path d="M22 3c-6 6-3 13 3 13s7-7 2-9" stroke-width="0.9" />
  <circle cx="26" cy="26" r="2.2" />
</svg>`;

const corners = () =>
  ["tl", "tr", "bl", "br"].map((c) => `<span class="corner ${c}">${CORNER}</span>`).join("");

function mandala(cls = "") {
  let s = "";
  const ring = (n, r, rx, ry) => {
    for (let i = 0; i < n; i++) {
      s += `<ellipse cx="0" cy="${-r}" rx="${rx}" ry="${ry}" transform="rotate(${(360 / n) * i})" />`;
    }
  };
  ring(8, 8.5, 2.8, 6.5);
  ring(16, 19.5, 3, 7.5);
  ring(24, 32.5, 2.4, 8.5);
  for (let i = 0; i < 48; i++) {
    const a = (Math.PI * 2 * i) / 48;
    s += `<circle class="dot" cx="${(44 * Math.cos(a)).toFixed(2)}" cy="${(44 * Math.sin(a)).toFixed(2)}" r="0.9" />`;
  }
  s += `<circle class="dot" r="3" /><circle r="13.5" /><circle r="26" /><circle r="41" /><circle r="47" />`;
  return `<svg class="mandala ${cls}" viewBox="-50 -50 100 100" aria-hidden="true">${s}</svg>`;
}

// A marigold garland (toran) hung across the top of the cover.
function toran() {
  const flower = (x, y, r, i) =>
    `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="url(#${i % 3 === 1 ? "mgY" : "mgO"})" stroke="#b5560c" stroke-width="0.6" stroke-dasharray="1.2 1" />`;
  let s = "";
  let i = 0;
  for (let x = 4; x <= 296; x += 7.3) {
    const y = 5 + 20 * Math.sin(Math.PI * ((x % 100) / 100));
    s += flower(x, y, 4.6, i++);
  }
  for (const x of [100, 200]) {
    for (let k = 0; k < 4; k++) s += flower(x, 10 + k * 8.5, 4.2, i++);
    s += `<path d="M${x} 42 q-4 6 0 12 q4 -6 0 -12z" fill="#3f7a2e" />`;
  }
  return `<svg viewBox="0 0 300 60" aria-hidden="true">
    <defs>
      <radialGradient id="mgO"><stop offset="0" stop-color="#c2410c"/><stop offset=".55" stop-color="#f28c18"/><stop offset="1" stop-color="#f7a531"/></radialGradient>
      <radialGradient id="mgY"><stop offset="0" stop-color="#e08a00"/><stop offset=".55" stop-color="#f8c21c"/><stop offset="1" stop-color="#fcd54a"/></radialGradient>
    </defs>${s}</svg>`;
}

// ---------- page content ----------

const coverPage = () => `
  <div class="cover">
    <div class="toran">${toran()}</div>
    ${mandala("bg-mandala")}
    <div class="cover-text">
      <div class="kicker">॥ शुभ रोका ॥</div>
      <h2 class="names">Shivam<span>&amp;</span>Swati</h2>
      <div class="rule"></div>
      <div class="label">The Roka Ceremony</div>
    </div>
  </div>`;

const introPage = () => `
  <div class="text-page">
    ${corners()}
    <div class="kicker">रोका</div>
    <h2>Roka</h2>
    <p>Two hearts, two families,<br />one beautiful beginning.</p>
    <div class="mini">${mandala()}</div>
    <p>With the blessings of our elders,<br />Shivam &amp; Swati begin<br />their journey together.</p>
  </div>`;

const closingPage = () => `
  <div class="text-page">
    ${corners()}
    <div class="kicker">शुभ आरंभ</div>
    <h2>Shubh Aarambh</h2>
    <p>Here's to a lifetime of love,<br />laughter and togetherness.</p>
    <div class="mini">${mandala()}</div>
    <p>With love &amp; blessings</p>
  </div>`;

const blankPage = () => `<div class="text-page">${corners()}</div>`;

const backCoverPage = () => `
  <div class="cover back-cover">
    ${mandala("bg-mandala")}
    <div class="cover-text">
      <h2 class="names">S <span style="display:inline">&amp;</span> S</h2>
      <div class="rule"></div>
      <div class="label">Forever begins here</div>
    </div>
  </div>`;

const photoPage = (photo, index) => `
  <div class="photo-page">
    ${corners()}
    <figure class="photo-frame" data-index="${index}">
      <img class="blur" alt="" aria-hidden="true" />
      <div class="placeholder">${
        SOURCE === "local" && !photo.url ? `Photo ${index + 1}<small>${photo.name}</small>` : "Loading…"
      }</div>
      <img class="main" alt="Roka ceremony photo ${index + 1}" />
      <button class="zoom" data-index="${index}" aria-label="View photo ${index + 1} full size">&#9906;</button>
    </figure>
    <div class="page-no">${index + 1}</div>
  </div>`;

function makeFaces() {
  const faces = [coverPage(), introPage(), ...photos.map(photoPage), closingPage()];
  // In the two-page view the back cover must land on the back of a leaf.
  if (faces.length % 2 === 0) faces.push(blankPage());
  faces.push(backCoverPage());
  return faces;
}

// ---------- book ----------

let faces = makeFaces();
let mode = null; // "spread" (two pages) or "single" (one page at a time)
let leaves = [];
let current = 0; // number of turned leaves

const maxPos = () => (mode === "spread" ? leaves.length : leaves.length - 1);

function build(newMode, focusFace) {
  if (focusFace === undefined) focusFace = mode === "spread" ? Math.max(0, current * 2 - 1) : current;
  mode = newMode;
  book.className = `book ${mode}`;
  book.innerHTML = "";
  leaves = [];

  const step = mode === "spread" ? 2 : 1;
  for (let i = 0; i < faces.length; i += step) {
    const leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.innerHTML = `
      <div class="face front">${faces[i]}</div>
      <div class="face back">${mode === "spread" ? faces[i + 1] : ""}</div>`;
    const index = leaves.length;
    leaf.addEventListener("click", (e) => {
      if (e.target.closest(".zoom")) return;
      if (index < current) prev();
      else next();
    });
    book.appendChild(leaf);
    leaves.push(leaf);
  }

  current = Math.min(mode === "spread" ? Math.ceil(focusFace / 2) : focusFace, maxPos());
  layer();
}

// Load photos only for pages near the open spread, so large albums stay quick.
function loadNear() {
  leaves.forEach((leaf, i) => {
    if (Math.abs(i - current) > 2) return;
    leaf.querySelectorAll(".photo-frame").forEach((frame) => {
      if (frame.dataset.loaded) return;
      const photo = photos[Number(frame.dataset.index)];
      const [main, fallback] = photoSources(photo, 1600);
      if (!main) return;
      frame.dataset.loaded = "1";
      const [blurSrc] = photoSources(photo, 200);
      const blur = frame.querySelector(".blur");
      const img = frame.querySelector(".main");
      img.addEventListener("load", () => {
        img.classList.add("loaded");
        frame.classList.add("ready");
      });
      img.addEventListener("error", () => {
        if (fallback && img.src !== fallback) img.src = fallback;
      });
      blur.addEventListener("load", () => blur.classList.add("loaded"));
      img.src = main;
      blur.src = blurSrc;
    });
  });
}

function chrome() {
  const max = maxPos();
  book.classList.toggle("at-start", mode === "spread" && current === 0);
  book.classList.toggle("at-end", mode === "spread" && current === leaves.length);
  book.classList.toggle("has-left", mode === "spread" && current > 0 && current < leaves.length);
  book.classList.toggle("has-right", current < max && !(mode === "spread" && current === 0));
  // Only leaves near the open spread are rendered; hundreds of 3D layers overwhelm the browser.
  leaves.forEach((leaf, i) => leaf.classList.toggle("far", Math.abs(i - current) > 3));
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === max;

  const pages = faces.length - 2;
  if (current === 0) statusEl.textContent = "Cover";
  else if (current === max) statusEl.textContent = "Back cover";
  else if (mode === "spread") statusEl.textContent = `${current * 2 - 1}–${Math.min(current * 2, pages)} of ${pages}`;
  else statusEl.textContent = `${current} of ${pages}`;
  loadNear();
}

function layer() {
  leaves.forEach((leaf, i) => {
    const flipped = i < current;
    leaf.classList.toggle("flipped", flipped);
    leaf.classList.toggle("top", i === current || (mode === "spread" && i === current - 1));
    leaf.style.zIndex = flipped ? i + 1 : leaves.length - i;
  });
  chrome();
}

function turn(leaf) {
  // Keep the turning leaf above the others for the duration of the animation.
  leaf.style.zIndex = leaves.length + 10;
  leaf.classList.remove("turning");
  void leaf.offsetWidth;
  leaf.classList.add("turning");
  setTimeout(() => leaf.classList.remove("turning"), 1100);
  setTimeout(layer, 550);
  chrome();
}

function next() {
  if (current >= maxPos()) return;
  const leaf = leaves[current];
  current++;
  leaf.classList.add("flipped");
  turn(leaf);
}

function prev() {
  if (current <= 0) return;
  current--;
  const leaf = leaves[current];
  leaf.classList.remove("flipped");
  turn(leaf);
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

document.addEventListener("keydown", (e) => {
  if (!lightbox.hidden) {
    if (e.key === "Escape") closeLightbox();
    return;
  }
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

let touchX = null;
bookWrap.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
bookWrap.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  touchX = null;
});

// ---------- lightbox ----------

function openLightbox(index) {
  const [src, fallback] = photoSources(photos[index], 2400);
  if (!src) return;
  lbImg.onerror = () => {
    if (fallback && lbImg.src !== fallback) lbImg.src = fallback;
  };
  lbImg.src = src;
  lbImg.alt = `Roka ceremony photo ${index + 1}`;
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
  lbImg.removeAttribute("src");
}

book.addEventListener("click", (e) => {
  const zoom = e.target.closest(".zoom");
  if (zoom) {
    e.stopPropagation();
    openLightbox(Number(zoom.dataset.index));
  }
});
lightbox.addEventListener("click", (e) => {
  if (e.target !== lbImg) closeLightbox();
});

// ---------- photos from the viewer's device ----------

if (SOURCE === "local") {
  const wrap = document.createElement("div");
  wrap.className = "add-photos";
  wrap.innerHTML = `<label for="photoInput">Add photos from your device</label>
    <input type="file" id="photoInput" accept="image/*" multiple />`;
  document.getElementById("bottom").appendChild(wrap);

  // Every picked photo gets its own page, in file-name order; nothing leaves the browser.
  wrap.querySelector("input").addEventListener("change", (e) => {
    const files = [...e.target.files]
      .filter((f) => f.type.startsWith("image/"))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    if (!files.length) return;
    photos.forEach((p) => p.url && URL.revokeObjectURL(p.url));
    photos = files.map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    faces = makeFaces();
    build(mode, 1);
    resize();
  });
}

// ---------- sizing ----------

const PAGE_RATIO = 0.72; // width / height of one page

function resize() {
  const top = document.getElementById("top").offsetHeight;
  const bottom = document.getElementById("bottom").offsetHeight;
  const availH = window.innerHeight - top - bottom - 24;
  const availW = document.body.clientWidth - 40;
  const spread = window.innerWidth >= 760 && window.innerWidth > window.innerHeight * 1.05;
  const pageW = Math.max(140, Math.floor(Math.min(spread ? availW / 2 : availW, availH * PAGE_RATIO)));
  document.documentElement.style.setProperty("--page-w", `${pageW}px`);
  document.documentElement.style.setProperty("--page-h", `${Math.round(pageW / PAGE_RATIO)}px`);
  const newMode = spread ? "spread" : "single";
  if (newMode !== mode) build(newMode);
}

window.addEventListener("resize", resize);
resize();

// ---------- falling marigold petals ----------

(function petals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = document.getElementById("petals");
  const ctx = canvas.getContext("2d");
  const colors = ["#f29a1f", "#f8c21c", "#e2552b", "#f7b733"];
  let w = 0;
  let h = 0;

  function size() {
    const dpr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  const spawn = (anywhere) => ({
    x: Math.random() * w,
    y: anywhere ? Math.random() * h : -20,
    r: 3.5 + Math.random() * 4.5,
    vy: 0.35 + Math.random() * 0.6,
    sway: Math.random() * Math.PI * 2,
    a: Math.random() * Math.PI * 2,
    va: (Math.random() - 0.5) * 0.04,
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  size();
  window.addEventListener("resize", size);
  const list = Array.from({ length: 26 }, () => spawn(true));

  (function frame() {
    if (!document.hidden) {
      ctx.clearRect(0, 0, w, h);
      for (const p of list) {
        p.sway += 0.012;
        p.x += Math.sin(p.sway) * 0.5;
        p.y += p.vy;
        p.a += p.va;
        if (p.y > h + 20) Object.assign(p, spawn(false));
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.a);
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    requestAnimationFrame(frame);
  })();
})();
