package com.helpmooca;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
              List<ReactPackage> packages = new PackageList(this).getPackages();
              // Packages that cannot be autolinked yet can be added manually here, for
              // example:
              // packages.add(new MyReactNativePackage());
              packages.add(new RNFirebaseAuthPackage());
              //new RNFirebaseAuthPackage();

              return packages;
            }

            @Override
            protected String getJSMainModuleName() {
              return "index";
            }
          };

      @Override
      public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
      }

      @Override
      public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
      }

      /**
       * Loads Flipper in React Native templates. Call this in the onCreate method
       * with something like initializeFlipper(this,
       * getReactNativeHost().getReactInstanceManager());
       *
       * @param context
       * @param reactInstanceManager
       */
      private static void initializeFlipper(final Context context, final ReactInstanceManager reactInstanceManager) {
        if (BuildConfig.DEBUG) {
          try {
            /*
             * We use reflection here to pick up the class that initializes Flipper, since
             * Flipper library is not available in release mode
             */
            final Class<?> aClass = Class.forName("com.helpmooca.ReactNativeFlipper");
            aClass.getMethod("initializeFlipper", Context.class, ReactInstanceManager.class).invoke(null, context,
                reactInstanceManager);
          } catch (final ClassNotFoundException e) {
            e.printStackTrace();
          } catch (final NoSuchMethodException e) {
            e.printStackTrace();
          } catch (final IllegalAccessException e) {
            e.printStackTrace();
          } catch (final InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
