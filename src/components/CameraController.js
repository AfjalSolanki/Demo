import ImageCropPicker from 'react-native-image-crop-picker';
import {Platform, Alert} from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  openSettings,
} from 'react-native-permissions';
import Helper from './Helper';

export default class CameraController {
  static cameraAlert(
    alertMessage,
    Camera,
    Gallery,
    Cancel,
    cbCamera,
    cbGallery,
  ) {
    Alert.alert(
      'Demo',
      alertMessage,
      [
        {
          text: Camera,
          onPress: () => {
            if (cbCamera) cbCamera(true);
            console.log('OK Pressed');
          },
        },
        {
          text: Gallery,
          onPress: () => {
            if (cbGallery) cbGallery(true);
            console.log('OK Pressed');
          },
        },
        {
          text: Cancel,
          onPress: () => {
            if (cbCamera) cbCamera(false);
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
  static async open(fileType, cb, iscrop) {
    if (fileType === 'both') {
      this.cameraAlert(
        'Select Image/Video Option...',
        'Image',
        'Video',
        'Cancel',
        statusImage => {
          if (statusImage) {
            this.mediaConfirmPermission(cb, iscrop, 'photo');
          }
        },
        statusVideo => {
          if (statusVideo) {
            this.mediaConfirmPermission(cb, iscrop, 'video');
          }
        },
      );
    } else {
      this.mediaConfirmPermission(cb, iscrop, 'photo');
    }
  }

  static mediaConfirmPermission = (cb, iscrop, media) => {
    this.cameraAlert(
      'Select Camera/Gallery Option...',
      'Camera',
      'Gallery',
      'Cancel',
      statusCamera => {
        if (statusCamera) {
          CameraController.checkPremission(
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.IOS.CAMERA,
            cb,
            'Camera',
            media,
            iscrop,
          );
        }
      },
      statusGallery => {
        if (statusGallery) {
          CameraController.checkPremission(
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            PERMISSIONS.IOS.PHOTO_LIBRARY,
            cb,
            'Gallery',
            media,
            iscrop,
          );
        }
      },
    );
  };

  static checkPremission = async (
    androidType,
    iosType,
    cb,
    launchType,
    media,
    iscrop,
  ) => {
    await check(
      Platform.select({
        android: androidType,
        ios: iosType,
      }),
    ).then(result => {
      if (result === 'granted') {
        this.selecteImage(cb, launchType, media, iscrop);
        return;
      }
      if (result === 'blocked' || result === 'unavailable') {
        Helper.permissionConfirm(
          'Access to the camera has been prohibited; please enable it in the Settings app to continue.',
          status => {
            if (status) {
              openSettings().catch(() => {
                console.warn('cannot open settings');
              });
            }
          },
        );
        return;
      }
      request(
        Platform.select({
          android: androidType,
          ios: iosType,
        }),
      ).then(status => {
        console.log('status  status  ', status);
        if (status === 'granted') {
          console.log('You can use the location');
          this.selecteImage(cb, launchType, media, iscrop);
        } else if (status === 'limited') {
          console.log('You can use the location');
          this.selecteImage(cb, launchType, media, iscrop);
        } else {
          console.log('location permission denied');
        }
      });
    });
  };

  static selecteImage(cb, launchType, media, iscrop) {
    if (launchType == 'Camera') {
      if (iscrop) {
        ImageCropPicker.openCamera({
          width: 800,
          height: 800,
          cropping: true,
          mediaType: media,
          cropperCircleOverlay: true,
          compressImageMaxWidth: 400,
          compressImageMaxHeight: 400,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            cb(image);
          })
          .catch(error => {
            console.log('------errorCamera: ', error);
          });
      } else {
        ImageCropPicker.openCamera({
          cropping: false,
          mediaType: media,
          cropperCircleOverlay: true,
          compressImageMaxWidth: 400,
          compressImageMaxHeight: 400,
          freeStyleCropEnabled: true,
          // ImageCropPicker
          // style={{}}
        })
          .then(image => {
            cb(image);
          })
          .catch(error => {
            console.log('------errorCamera: ', error);
          });
      }
    } else {
      if (iscrop) {
        ImageCropPicker.openPicker({
          width: 800,
          height: 800,
          cropping: true,
          mediaType: media,
          cropperCircleOverlay: true,
          compressImageMaxWidth: 400,
          compressImageMaxHeight: 400,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            cb(image);
          })
          .catch(error => {
            console.log('------errorGellryyy: ', error);
          });
      } else {
        ImageCropPicker.openPicker({
          cropping: false,
          mediaType: media,
          cropperCircleOverlay: true,
          compressImageMaxWidth: 400,
          compressImageMaxHeight: 400,
          freeStyleCropEnabled: true,
        })
          .then(image => {
            cb(image);
          })
          .catch(error => {
            console.log('------errorGellryyy: ', error);
          });
      }
    }
  }
}
